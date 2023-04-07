package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.model.Order;
import com.ecommercesystem.backend.model.OrderSummary;
import com.ecommercesystem.backend.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
//@CrossOrigin //remove in production - bypass CORS policy error
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @GetMapping("")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PostMapping("/newOrder")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.createOrder(order));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") long id) {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") long id, @RequestBody Order editedOrder) {
        return ResponseEntity.ok(orderService.updateOrder(id, editedOrder));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteOrder(@PathVariable("id") long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/today")
    public ResponseEntity<OrderSummary> getTodayOrderSummary() {
        return ResponseEntity.ok(orderService.getTodayOrderSummary());
    }
}
