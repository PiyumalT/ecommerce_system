package com.ecommercesystem.backend.config;

import com.ecommercesystem.backend.token.TokenRepository;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final TokenRepository tokenRepository;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        final String authHeaderStartWord = "Bearer ";
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith(authHeaderStartWord)) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized access denied.");
            return;
        }
        jwt = authHeader.substring(authHeaderStartWord.length());
        try {
            userEmail = jwtService.extractUsername(jwt);
        } catch (ExpiredJwtException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Token has Expired.");
            return;
        }
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            final UserDetails userDetails;
            try {
                userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            } catch (UsernameNotFoundException e) {
                response.sendError(HttpServletResponse.SC_NOT_FOUND, "User Not Found");
                return;
            }
            var isTokenValid = tokenRepository.findByToken(jwt)
                    .map(t -> !t.isExpired() && !t.isRevoked())
                    .orElse(false);
            if (jwtService.isTokenValid(jwt, userDetails) && isTokenValid) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        try {
            filterChain.doFilter(request, response);
        } catch (IllegalStateException e) {
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Unknown error occurred.");
        }
    }
}
