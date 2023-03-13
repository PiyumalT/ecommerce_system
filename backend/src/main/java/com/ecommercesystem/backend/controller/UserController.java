package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.exception.ResourceNotFoundException;
import com.ecommercesystem.backend.model.User;
import com.ecommercesystem.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
//@CrossOrigin //remove in production - bypass CORS policy error
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PostMapping("/newUser")
    public ResponseEntity<User> createUser(@RequestBody User user){
        user.setRole("USER");
        user.setRegDate(LocalDateTime.now().toString());
        System.out.println(user);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id){
        User user = userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("No user found to the given user id: " + id)
        );
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User editedUser){
        User userToUpdate = userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("No user found to the given user id: " + id)
        );

        userToUpdate.setName(editedUser.getName());
//        userToUpdate.setRegDate(editedUser.getRegDate());
        userToUpdate.setEmail(editedUser.getEmail());

        userRepository.save(userToUpdate);

        return ResponseEntity.ok(userToUpdate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id){
        User user = userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("No employee found to the given user id: " + id)
        );
        userRepository.delete(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
