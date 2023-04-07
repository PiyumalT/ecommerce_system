package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c \n" +
            "FROM Cart c\n" +
            "WHERE c.user_id = ?1")

    List<Cart> findAllCartEntriesByUserId(long id);
}
