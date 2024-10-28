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

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class AppConfig {

    @Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(Authorize -> Authorize
            .requestMatchers("/auth/signup").permitAll()// Allow unauthenticated access
                .requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
            .requestMatchers("/api/**").authenticated()
                .requestMatchers("/api/watchlist/**").authenticated()
            .anyRequest().permitAll())
        .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
        .csrf(csrf -> csrf.disable())
        .cors(cors -> cors.configurationSource(corsConfigurationSource()));
    return http.build();
}
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
                CorsConfiguration corsConfiguration = new CorsConfiguration();
                corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
                corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"));
                corsConfiguration.setAllowCredentials(true);
                corsConfiguration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                corsConfiguration.setExposedHeaders(Arrays.asList("Authorization"));
                corsConfiguration.setMaxAge(3600L);
                UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**",corsConfiguration);

                return source; // This return statement is now inside the getCorsConfiguration method
            }


}
