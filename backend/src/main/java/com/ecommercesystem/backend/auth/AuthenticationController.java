package com.ecommercesystem.backend.auth;

import com.ecommercesystem.backend.model.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin //remove in production - bypass CORS policy error

public class AuthenticationController {
    private final AuthenticationService service;

    public ResponseEntity<?> register(RegisterRequest request, Role role, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        final String registerResponse = service.register(request, role, getSiteURL(servletRequest));
        if (registerResponse == null) {
            return ResponseEntity.badRequest().body("email already exists");
        } else {
            return ResponseEntity.ok(registerResponse);
        }
    }

    private String getSiteURL(HttpServletRequest request) {
        String siteURL = request.getRequestURL().toString();
        return siteURL.substring(0, siteURL.lastIndexOf("/")).strip();
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        return register(request, Role.USER, servletRequest);
    }

    @PostMapping("/registerAdmin")
    public ResponseEntity<?> registerAdmin(@RequestBody RegisterRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        return register(request, Role.ADMIN, servletRequest);
    }

    @GetMapping("/verify")
    public String verifyUser(@Param("code") String code) {
        if (service.verify(code)) {
            return "verification success";
        } else {
            return "verification failed";
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
