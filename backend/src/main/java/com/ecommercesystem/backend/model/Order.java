package com.ecommercesystem.backend.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int customer_id;
    private int address_id;
    private float price;
    private LocalDateTime date;
    private float paid_amount;
    private boolean shipped;
    private int quantity;
    private int item_id;
}
