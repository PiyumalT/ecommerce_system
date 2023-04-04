package com.ecommercesystem.backend.repository;

import com.ecommercesystem.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    Optional<User> findUserByVerificationCode(String verificationCode);

    @Query("update User u\n" +
            "set u.firstname = ?1, u.lastname = ?2\n" +
            "where u.id = ?3")
    void updateUser(String firstname, String lastname, Integer userId);

}
