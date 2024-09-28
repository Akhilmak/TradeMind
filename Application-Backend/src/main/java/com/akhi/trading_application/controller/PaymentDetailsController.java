package com.akhi.trading_application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.modal.PaymentDetails;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.service.PaymentDetailsService;
import com.akhi.trading_application.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("/api")
public class PaymentDetailsController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentDetailsService paymentDetailsService;

    @PostMapping("/payment-details")
    public ResponseEntity<PaymentDetails> addPaymentDetails(@RequestBody PaymentDetails paymentDetailsRequest,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwt(jwt);
        PaymentDetails paymentDetails = paymentDetailsService.addPaymentDetails(
                paymentDetailsRequest.getAccountNumber(), paymentDetailsRequest.getIfscCode(),
                paymentDetailsRequest.getBankName(), paymentDetailsRequest.getAccountHolderName(), user);
        return new ResponseEntity<>(paymentDetails,HttpStatus.CREATED);

    }

    @GetMapping("/payment-details")
    public ResponseEntity<PaymentDetails> getUsersPaymentDetails(@RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwt(jwt);
        PaymentDetails paymentDetails=paymentDetailsService.getUsersPaymentDetails(user);
        return new ResponseEntity<>(paymentDetails,HttpStatus.OK);
    }

}
