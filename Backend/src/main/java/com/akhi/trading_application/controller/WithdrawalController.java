package com.akhi.trading_application.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.Wallet;
import com.akhi.trading_application.modal.WalletTransaction;
import com.akhi.trading_application.modal.Withdrawal;
import com.akhi.trading_application.service.UserService;
import com.akhi.trading_application.service.WalletService;
import com.akhi.trading_application.service.WithdrawalService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.GetMapping;




@RestController
public class WithdrawalController {
    @Autowired
    private WithdrawalService withdrawalService;
    @Autowired
    private WalletService walletService;
    @Autowired
    private UserService userService;
    // @Autowired
    // private TransactionSe


    @PostMapping("/api/withdrawal/{amount}")
    public ResponseEntity<?> withdrawalRequest(@PathVariable Long amount, @RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwt(jwt);
        Wallet userWallet=walletService.getUserWallet(user);
        Withdrawal withdrawal=withdrawalService.requestWithdrawal(amount, user);
        walletService.addBalance(userWallet, -withdrawal.getAmount());

        // WalletTransaction walletTransaction=walletTransactionService.createTransaction(userWallet,);
        
        return new ResponseEntity<>(withdrawal,HttpStatus.OK);
    }

    @PatchMapping("/api/admin/withdrawal/{id}/proceed/{accept}")
    public ResponseEntity<?> proceedWithdrawal(@PathVariable Long id, @PathVariable boolean accept, @RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwt(jwt);
        Withdrawal withdrawal=withdrawalService.proceedWithdrawal(id, accept);
        Wallet userWallet=walletService.getUserWallet(user);
        if(!accept){
            walletService.addBalance(userWallet,withdrawal.getAmount());
        }
        return new ResponseEntity<>(withdrawal,HttpStatus.OK);
    }


    @GetMapping("/api/withdrawal")
    public ResponseEntity<List<Withdrawal>> getWithdrawalHistory(@RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwt(jwt);
        List<Withdrawal> withdrawal=withdrawalService.getUsersWithdrawalHistory(user);
        return new ResponseEntity<>(withdrawal,HttpStatus.OK);
    }

    @GetMapping("/api/admin/withdrawal")
    public ResponseEntity<List<Withdrawal>> getWithdrawalRequest(@RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwt(jwt);
        List<Withdrawal> withdrawal=withdrawalService.getAllWithdrawals();
        return new ResponseEntity<>(withdrawal,HttpStatus.OK);
    }
    
    

}
