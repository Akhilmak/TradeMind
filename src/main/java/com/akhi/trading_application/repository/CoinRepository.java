package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.Coin;

public interface CoinRepository extends JpaRepository<Coin,String>{

}
