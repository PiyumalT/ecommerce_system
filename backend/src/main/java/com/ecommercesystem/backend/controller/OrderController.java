package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.exceptionHandler.ResourceNotFoundException;
import com.ecommercesystem.backend.model.Order;
import com.ecommercesystem.backend.repository.OrderRepository;
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

    private OrderRepository orderRepository;

    @GetMapping("")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @PostMapping("/newOrder")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderRepository.save(order));
    }

    @GetMapping("{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") long id) {
        Order order = orderRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No order found to the given order id: " + id)
        );
        return ResponseEntity.ok(order);
    }

    @PutMapping("{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") long id, @RequestBody Order editedOrder) {
        Order orderToUpdate = orderRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No order found to the given order id: " + id)
        );

        orderToUpdate.setShipped(editedOrder.getShipped());

        orderRepository.save(orderToUpdate);

        return ResponseEntity.ok(orderToUpdate);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        Order order = orderRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No order found to the given order id: " + id)
        );
        orderRepository.delete(order);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
