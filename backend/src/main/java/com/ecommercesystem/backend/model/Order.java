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

    @Column(name = "cus_id")
    private int customer_id;
    @Column(name = "address_id")
    private int address_id;
    @Column(name = "price")
    private float price;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "paid")
    private int paid_amount;

    @Column(name = "shipped")
    private int shipped;
}
