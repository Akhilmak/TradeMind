package com.akhi.trading_application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.domain.PaymentMethod;
import com.akhi.trading_application.modal.PaymentOrder;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.response.PaymentResponse;
import com.akhi.trading_application.service.PaymentService;
import com.akhi.trading_application.service.UserService;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;


@RestController
public class PaymentController {

    @Autowired
    private UserService userService;
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/api/payment/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(@PathVariable PaymentMethod paymentMethod, @PathVariable Long amount, @RequestHeader("Authorization") String jwt) throws Exception,StripeException,RazorpayException{
        User user=userService.findUserByJwt(jwt);
        PaymentResponse response;
        PaymentOrder order=paymentService.createOrder(user, amount, paymentMethod);
        if(paymentMethod.equals(PaymentMethod.RAZORPAY)){
            response=paymentService.createRazorpayPaymentLink(user, amount,order.getId());
        }else{
            response=paymentService.createStripePaymentLink(user, amount, order.getId());
        }
        return new ResponseEntity<>(response,HttpStatus.CREATED);

    }
    

}
