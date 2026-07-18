package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    Optional<User> findUserByVerificationCode(String verificationCode);

    @Modifying
    @Transactional
    @Query("UPDATE User u " +
            "SET u.firstname = :firstname, u.lastname = :lastname " +
            "WHERE u.id = :userId")
    void updateUser(String firstname, String lastname, Integer userId);
}
