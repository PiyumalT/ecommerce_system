package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.service.UserService;
import com.ecommercesystem.backend.user.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PreAuthorize("#id.equals(authentication.principal.id)")
    @GetMapping("/{id}")
    public ResponseEntity<?> viewUserById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/saveTestUser")
    public String saveTestUser() {
        return userService.saveUserForTest();
    }

    @PreAuthorize("#id.equals(authentication.principal.id)")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@PathVariable("id") Integer id, @RequestBody UserDTO editedUser) {
        return ResponseEntity.ok(userService.updateUserById(id, editedUser));
    }
}
