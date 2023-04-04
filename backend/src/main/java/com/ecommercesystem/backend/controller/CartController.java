package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.model.Cart;
import com.ecommercesystem.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.addToCart(cart));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Cart>> viewAllCarts() {
        return ResponseEntity.ok(cartService.viewAllCarts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> viewCartById(@PathVariable("id") long id) {
        return ResponseEntity.ok(cartService.viewFromCartById(id));
    }

    @GetMapping("/user={id}")
    public ResponseEntity<List<Cart>> viewCartOfUserByUserId(@PathVariable("id") long userId) {
        return ResponseEntity.ok(cartService.viewCartByUser(userId));
    }
}
