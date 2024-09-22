package com.akhi.trading_application.service;

import java.util.List;

import com.akhi.trading_application.modal.Coin;

public interface CoinService {

    List<Coin> getCoinList(int page) throws Exception;

    String getMarketChart(String coinId, int days) throws Exception;

    String getCoinDetails(String coinId) throws Exception;//returns Data from coingenco api

    Coin findById(String coinId) throws Exception;//returns data from DataBase

    String searchCoin(String keyWord) throws Exception;

    String getTop50CoinByMarketCapRank() throws Exception ;

    String getTradingCoins() throws Exception;

}
