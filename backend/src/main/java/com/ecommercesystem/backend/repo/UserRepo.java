package com.ecommercesystem.backend.repo;

import com.ecommercesystem.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo extends JpaRepository<User,Integer> {



}
