package com.ecommercesystem.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
//    private final UserMapper userMapper;

    public final User getUserById(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }

//    public final String updateUserById(Integer id, UserDto editedUser) {
//        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("No User name found to id: " + id + ". "));
//        return updateUser(user, editedUser);
//    }
//
//    public final String updateUser(User user, UserDto editedUser) {
//        userMapper.updateUserFromDto(editedUser, user);
//        userRepository.save(user);
//        return "";
//    }

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
        return "deactivated " + user.getFirstname() + " " + user.getLastname();
    }

    public final String removeUserFromDBById(Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("No User name found to id: " + id + ". "));
        return removeUserFromDB(user);
    }
}
