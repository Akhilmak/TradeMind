package com.akhi.trading_application.service;

import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.Wallet;

public interface WalletService {
    Wallet getUserWallet(User user);
    Wallet addBalance(Wallet wallet, Long amount);
    Wallet findById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet receipentWallet, Long amount) throws Exception;
    Wallet payOrderPayment(Order order,User user)throws Exception;

}
