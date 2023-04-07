package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    // all crud operations handle here - no need to add - already defined
    @Query("""
            update Item i
            set i.name = ?2, i.description = ?3, i.price = ?4, i.options = ?5, i.quantity = ?6, i.category = ?7, i.images = ?8
            where i.id = ?1
            """)
    Item updateItem(long itemId, String name, String description, float price, String options, int quantity, String category, String img);

    @Query("""
            SELECT i
            FROM Item i
            WHERE i.name LIKE %?1%
            """)
    List<Item> searchItemsByName(String name);

}
