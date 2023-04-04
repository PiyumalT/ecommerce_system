package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.Order;
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
            SELECT *
            FROM Order o
            WHERE o.customer_id = ?1
            """)
    List<Order> findAllByUserId(long id);

    @Query("""
            SELECT *
            FROM Order o
            WHERE o.item_id = ?1
            """)
    List<Order> findAllByItemId(long id);
}
