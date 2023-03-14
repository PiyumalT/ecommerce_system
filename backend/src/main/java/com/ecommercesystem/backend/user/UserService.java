package com.ecommercesystem.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public final User getUserById(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }
}
