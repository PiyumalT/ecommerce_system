package com.ecommercesystem.backend.service;

import com.ecommercesystem.backend.exceptionHandler.ResourceNotFoundException;
import com.ecommercesystem.backend.model.Order;
import com.ecommercesystem.backend.model.OrderSummary;
import com.ecommercesystem.backend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;


    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }


    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order getOrderById(long id) {
        return orderRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No order found to the given order id: " + id)
        );
    }

    public Order updateOrder(long id, Order editedOrder) {

        return orderRepository.updateOrder(id, editedOrder.getAddress_id(), editedOrder.getPaid_amount(), editedOrder.isShipped());
    }

    public void deleteOrder(long id) {
        Order order = getOrderById(id);
        orderRepository.delete(order);
    }

    public List<Order> getAllOrdersOfAUser(long userId) {
        return orderRepository.findAllOrdersMadeByUserUsingUserId(userId);
    }

    public List<Order> getAllOrdersOfAItem(long itemId) {
        return orderRepository.findAllOrdersMadeToAItemByItemId(itemId);
    }

    public OrderSummary getTodayOrderSummary() {
        return orderRepository.findAllOrdersMadeToday();
    }
}
