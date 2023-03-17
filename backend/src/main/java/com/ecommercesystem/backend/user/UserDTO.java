package com.ecommercesystem.backend.user;

public record UserDTO(
        Integer id,
        String firstname,
        String lastname,
        String email
) {
}

