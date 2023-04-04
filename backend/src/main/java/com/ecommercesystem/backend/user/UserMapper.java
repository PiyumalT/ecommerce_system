package com.ecommercesystem.backend.user;

import com.ecommercesystem.backend.dto.UserDTO;
import com.ecommercesystem.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserMapper implements Function<User, UserDTO> {


    @Override
    public UserDTO apply(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstname(user.getFirstname());
        userDTO.setLastname(user.getLastname());
        return userDTO;
    }
}
