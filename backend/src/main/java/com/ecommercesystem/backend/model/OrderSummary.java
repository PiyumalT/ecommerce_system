package com.ecommercesystem.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class OrderSummary {
    private int totalUsers;
    private int totalItems;
    private int totalIncome;
    private int totalOrders;
}
