package com.akhi.trading_application.config;

import java.util.*;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class AppConfig {

    @Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(Authorize -> Authorize
            .requestMatchers("/auth/signup").permitAll() // Allow unauthenticated access
            .requestMatchers("/api/**").authenticated()
            .anyRequest().permitAll())
        .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
        .csrf(csrf -> csrf.disable())
        .cors(cors -> cors.configurationSource(corsConfigurationSource()));
    return http.build();
}
    private CorsConfigurationSource corsConfigurationSource() {
        return new CorsConfigurationSource(){
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                CorsConfiguration corsConfiguration = new CorsConfiguration();
                corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
                corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                corsConfiguration.setAllowCredentials(true);
                corsConfiguration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                corsConfiguration.setExposedHeaders(Arrays.asList("Authorization"));
                corsConfiguration.setMaxAge(3600L);
            
                // UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                // source.registerCorsConfiguration("/**", corsConfiguration);
                
                return corsConfiguration; // This return statement is now inside the getCorsConfiguration method
            }
        };
    }
}
