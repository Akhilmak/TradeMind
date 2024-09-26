package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.WatchList;

public interface WatchlistRepository extends JpaRepository<WatchList, Long> {

    WatchList findByUserId(Long userId);

}
