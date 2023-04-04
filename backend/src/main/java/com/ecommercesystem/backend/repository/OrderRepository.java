package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // all crud operations handle here - no need to add - already defined
}
