package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // all crud operations handle here - no need to add - already defined
}
