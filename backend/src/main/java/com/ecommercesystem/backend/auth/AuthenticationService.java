package com.ecommercesystem.backend.auth;

import com.ecommercesystem.backend.config.JwtService;
import com.ecommercesystem.backend.model.Role;
import com.ecommercesystem.backend.model.User;
import com.ecommercesystem.backend.repository.UserRepository;
import com.ecommercesystem.backend.service.TokenService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final JavaMailSender mailSender;


    private void sendVerificationEmail(User user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String toSendAddress = user.getEmail();
        String fromSendingAddress = "ecommercesiteg4@gmail.com";
        String senderName = "Group 04";
        String subject = "Please verify your registration.";
        String content = "Dear [[name]], <br>"
                + "Please click the link link below to verify your registration;<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you, <br>"
                + "Group 04."
                + "<h6>Please login inorder to acquire the authorization to access the site.</h6>";
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        assert fromSendingAddress != null;
        helper.setFrom(fromSendingAddress, senderName);
        helper.setTo(toSendAddress);
        helper.setSubject(subject);
        content = content.replace("[[name]]", user.getFirstname());
        String verifyURL = siteURL + "/verify?code=" + user.getVerificationCode();
        content = content.replace("[[URL]]", verifyURL);
        helper.setText(content, true);
        mailSender.send(message);
    }

    public boolean verify(String verificationCode) {
        User user = userRepository.findUserByVerificationCode(verificationCode)
                .orElseThrow(() -> new UsernameNotFoundException("User not found in the database or this account is already verified."));
        if (user == null || user.isEnabled()) {
            return false;
        }
        user.setVerificationCode(null);
        user.setEnabled(true);
        userRepository.save(user);
        return true;
    }

    public String register(RegisterRequest request, Role role, String siteURL) throws MessagingException, UnsupportedEncodingException {
        if (userRepository.existsByEmail(request.getEmail())) {
            return null;
        }
        String randomVerificationCode = RandomString.make(64);
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .role(role)
                .enabled(false)
                .verificationCode(randomVerificationCode)
                .build();
        var savedUser = userRepository.save(user);
        sendVerificationEmail(savedUser, siteURL);
        return "Verification email has sent to your inbox.";
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("user not found."));
        if (!user.isEnabled()) {
            throw new AuthenticationServiceException("Account not verified");
        }
        var jwtToken = jwtService.generateToken(user);
        tokenService.revokeUserTokens(user);
        tokenService.saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public Object login(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("user not found."));
        return user.getId();
    }
}
