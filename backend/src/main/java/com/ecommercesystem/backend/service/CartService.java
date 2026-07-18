package com.ecommercesystem.backend.service;

import com.ecommercesystem.backend.exceptionHandler.ResourceNotFoundException;
import com.ecommercesystem.backend.model.Cart;
import com.ecommercesystem.backend.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart viewFromCartById(long id) {
        return cartRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No cart found to the given item id: " + id)
        );
    }

    public List<Cart> viewAllCarts() {
        return cartRepository.findAll();
    }

    public List<Cart> viewCartByUser(Integer userId) {
        return cartRepository.findAllCartEntriesByUserId(userId);
    }
}
