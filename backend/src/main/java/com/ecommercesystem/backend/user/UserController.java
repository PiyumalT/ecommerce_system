package com.ecommercesystem.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PreAuthorize("#id.equals(authentication.principal.id)")
    @GetMapping("/{id}")
    public ResponseEntity<?> viewUserById(@PathVariable("id") Integer id, HttpServletRequest request) {
        return ResponseEntity.ok(userService.getUserById(id, request));
    }
}
