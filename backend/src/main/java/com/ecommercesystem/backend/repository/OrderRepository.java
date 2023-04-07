package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.Order;
import com.ecommercesystem.backend.model.OrderSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // all crud operations handle here - no need to add - already defined
    @Query("""
            update Order o
            set o.address_id = ?2, o.paid_amount = ?3, o.shipped = ?4
            where o.id = ?1
            """)
    Order updateOrder(long orderId, int address_id, float paid_amount, boolean shipped);

    @Query("""
            SELECT o
            FROM Order o
            WHERE o.user_id = ?1
            """)
    List<Order> findAllOrdersMadeByUserUsingUserId(long id);

    @Query("""
            SELECT o
            FROM Order o
            WHERE o.item_id = ?1
            """)
    List<Order> findAllOrdersMadeToAItemByItemId(long id);

    @Query("""
            SELECT COUNT(DISTINCT o.user_id), SUM(o.paid_amount), COUNT(*)
            FROM Order o
            WHERE o.date = GETDATE()
            """)
    OrderSummary findAllOrdersMadeToday();
}
