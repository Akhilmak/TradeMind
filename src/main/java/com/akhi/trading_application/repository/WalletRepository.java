package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.Wallet;

public interface WalletRepository extends JpaRepository<Wallet,Long>{

    Wallet findByUserId(Long userId);

}
