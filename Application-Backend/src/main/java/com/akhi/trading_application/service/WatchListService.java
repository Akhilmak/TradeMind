package com.akhi.trading_application.service;

import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.WatchList;

public interface WatchListService {

    WatchList findUserWatchList(Long userId) throws Exception;

    WatchList createWatchList(User user);
    WatchList findById(Long id) throws Exception;

    Coin  addCoinToWatchList(Coin coin,User user) throws Exception;


}
