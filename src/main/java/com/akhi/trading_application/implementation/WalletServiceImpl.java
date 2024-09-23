package com.akhi.trading_application.implementation;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.domain.OrderType;
import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.Wallet;
import com.akhi.trading_application.repository.WalletRepository;
import com.akhi.trading_application.service.WalletService;

@Service
public class WalletServiceImpl implements WalletService{

    @Autowired
    private WalletRepository walletRepository;
    @Override
    public Wallet getUserWallet(User user) {

        Wallet wallet=walletRepository.findByUserId(user.getId());
        if(wallet==null){
            wallet=new Wallet();
            wallet.setUser(user);
        }
        return wallet;
    }

    @Override
    public Wallet addBalance(Wallet wallet, Long amount) {
        BigDecimal balance=wallet.getBalance();
        BigDecimal newBalance=balance.add(BigDecimal.valueOf(amount));
        wallet.setBalance(newBalance);
        return walletRepository.save(wallet);
    }

    @Override
    public Wallet findById(Long id) throws Exception{

        Optional<Wallet> wallet=walletRepository.findById(id);
        if(wallet.isEmpty()){
            throw new Exception("Wallet not found.....!");
        }
        return wallet.get();
    }

    @Override
    public Wallet walletToWalletTransfer(User sender, Wallet receipentWallet, Long amount) throws Exception{

        Wallet senderWallet=getUserWallet(sender);

        if(senderWallet.getBalance().compareTo(BigDecimal.valueOf(amount))<0){

            throw new Exception("Insufficient Balance....!");
        }
        BigDecimal senderBalance=senderWallet.getBalance().subtract(BigDecimal.valueOf(amount));

        senderWallet.setBalance(senderBalance);
        walletRepository.save(senderWallet);

        BigDecimal receiverBalance=receipentWallet.getBalance().add(BigDecimal.valueOf(amount));
        receipentWallet.setBalance(receiverBalance);
        walletRepository.save(receipentWallet);
        return senderWallet;
    }

    @Override
    public Wallet payOrderPayment(Order order, User user) throws Exception{
        Wallet wallet=getUserWallet(user);
        if(order.getOrderType()==OrderType.BUY){
            BigDecimal balance=wallet.getBalance().subtract(order.getPrice());
            if(balance.compareTo(order.getPrice())<0){
                throw new Exception("Insufficient funds to place order...!");
            }
            wallet.setBalance(balance);
        }else{
            BigDecimal balance=wallet.getBalance().add(order.getPrice());
            wallet.setBalance(balance);

        }
        walletRepository.save(wallet);
        return wallet;
    }

}

