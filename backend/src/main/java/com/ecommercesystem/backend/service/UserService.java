package com.ecommercesystem.backend.service;

import com.ecommercesystem.backend.config.JwtService;
import com.ecommercesystem.backend.dto.UserDTO;
import com.ecommercesystem.backend.mapper.UserMapper;
import com.ecommercesystem.backend.model.Role;
import com.ecommercesystem.backend.model.User;
import com.ecommercesystem.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final TokenService tokenService;
    private final ModelMapper modelMapper;
    private final UserMapper usermapper;

    public final String updateUserById(Integer id, UserDTO editedUser) {
        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("No User name found to id: " + id + ". "));
        return updateUser(user, editedUser);
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(usermapper)
                .collect(Collectors.toList());
    }

    public final String updateUser(User user, UserDTO editedUser) {
        user.setFirstname(editedUser.getFirstname());
        user.setLastname(editedUser.getLastname());
        userRepository.updateUser(editedUser.getFirstname(), editedUser.getLastname(), user.getId());
        return "updated " + user.getFirstname() + " " + user.getLastname();
    }


    public final UserDTO getUserById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
        return modelMapper.map(user, UserDTO.class);
    }

    public final String deactivateUser(User user) {
        user.setEnabled(false);
        userRepository.save(user);
        return "deactivated " + user.getFirstname() + " " + user.getLastname();
    }

    public final String deactivateUserById(Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("No User name found to id: " + id + ". "));
        return deactivateUser(user);
    }

    public final String removeUserFromDB(User user) {
        userRepository.delete(user);
        tokenService.revokeUserTokens(user);
        return "deactivated " + user.getFirstname() + " " + user.getLastname();
    }

    public final String removeUserFromDBById(Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("No User name found to id: " + id + ". "));
        return removeUserFromDB(user);
    }

    public String saveUserForTest() {
        var user = User.builder()
                .firstname("Nayantha")
                .lastname("Yasiru")
                .password(this.passwordEncoder.encode("1234"))
                .email("nayanthayasiru@gmail.com")
                .role(Role.USER)
                .enabled(true)
                .verificationCode(null)
                .build();
        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(savedUser);
        tokenService.revokeUserTokens(savedUser);
        tokenService.saveUserToken(savedUser, jwtToken);
        return jwtToken;
    }
}
