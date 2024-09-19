package com.akhi.trading_application.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HomeController {

    @GetMapping
    public String home() {
        return "Welcome to Home Page";
    }

    @GetMapping("/api")
    public String getMethodName() {
        return "Secure";
    }
    
}
