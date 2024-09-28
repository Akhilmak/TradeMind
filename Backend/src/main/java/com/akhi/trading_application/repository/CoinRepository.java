package com.akhi.trading_application.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.Coin;

public interface CoinRepository extends JpaRepository<Coin,String>{
Optional<Coin> findCoinById(String coinId);
}
