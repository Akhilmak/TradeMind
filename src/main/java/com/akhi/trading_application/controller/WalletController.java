package com.akhi.trading_application.controller;


import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.PaymentOrder;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.Wallet;
import com.akhi.trading_application.modal.WalletTransaction;
// import com.akhi.trading_application.response.PaymentResponse;
import com.akhi.trading_application.service.OrderService;
import com.akhi.trading_application.service.PaymentService;
import com.akhi.trading_application.service.UserService;
import com.akhi.trading_application.service.WalletService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class WalletController {
    @Autowired
    private WalletService walletService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/api/wallet")
    ResponseEntity<Wallet> getWallet(@RequestHeader("Authorization") String jwt)throws Exception{
        User user=userService.findUserByJwt(jwt);
        Wallet wallet=walletService.getUserWallet(user);
        return new ResponseEntity<>(wallet,HttpStatus.OK);
    }


    @PutMapping("api/wallet/{walletId}/transefer")
    ResponseEntity<Wallet> walletToWalletTransaction(@RequestHeader("Authorization") String jwt, @PathVariable Long walletId,@RequestBody WalletTransaction transaction)throws Exception{
        
        User senderUser=userService.findUserByJwt(jwt);
        Wallet receiverWallet=walletService.findById(walletId);
        Wallet wallet=walletService.walletToWalletTransfer(senderUser,receiverWallet,transaction.getAmount());
        return new ResponseEntity<>(wallet,HttpStatus.OK);
    }

    @PutMapping("api/wallet/order/{orderId}/pay")
    ResponseEntity<Wallet> payOrderPayment(@RequestHeader("Authorization") String jwt, @PathVariable Long orderId)throws Exception{
        
        User user=userService.findUserByJwt(jwt);

        Order order=orderService.getOrderById(orderId);

        Wallet wallet=walletService.payOrderPayment(order,user);
        return new ResponseEntity<>(wallet,HttpStatus.OK);
    }

    @PutMapping("api/wallet/deposit")
    ResponseEntity<Wallet> addMoneyToWallet(@RequestHeader("Authorization") String jwt, @RequestParam(name="order_id") Long orderId,@RequestParam(name="payment_id") String payment_id)throws Exception{
        
        User user=userService.findUserByJwt(jwt);
        Wallet wallet=walletService.getUserWallet(user);

        PaymentOrder order=paymentService.getPaymentOrderById(orderId);
        Boolean status=paymentService.proceedPaymentOrder(order, payment_id);
        if(wallet.getBalance()==null){
            wallet.setBalance(BigDecimal.valueOf(0));
        }
        if(status){
            wallet=walletService.addBalance(wallet,order.getAmount());
        }

        return new ResponseEntity<>(wallet,HttpStatus.OK);
    }

}
