package com.ecommercesystem.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;
    private int cus_id;
    private String address_id;
    private float price;
    private LocalDateTime date;
    private float paid_amount;
    private boolean shipped;
    private int quantity;
    private long item_id;
}
