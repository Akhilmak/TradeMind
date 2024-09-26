package com.akhi.trading_application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.WatchList;
import com.akhi.trading_application.service.CoinService;
import com.akhi.trading_application.service.UserService;
import com.akhi.trading_application.service.WatchListService;

@RestController
@RequestMapping("/api/watchlist")
public class WatchlistController {

    @Autowired
    private  WatchListService watchListService;
    @Autowired
    private  UserService userService;

    @Autowired
    private CoinService coinService;

    @GetMapping("/user")
    public ResponseEntity<WatchList> getUserWatchlist(@RequestHeader("Authorization") String jwt) throws Exception {
        User user=userService.findUserByJwt(jwt);
        WatchList watchList=watchListService.findUserWatchList(user.getId());
        return ResponseEntity.ok().body(watchList);
    }

    @PostMapping("/create")
    public ResponseEntity<WatchList> createWatchlist(@RequestHeader("Authorization") String jwt) throws Exception {
        User user=userService.findUserByJwt(jwt);
        WatchList watchList=watchListService.createWatchList(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(watchList);
    }

    @GetMapping("/{watchlistId}")
    public ResponseEntity<WatchList> getWatchList(@PathVariable("watchlistId") Long watchlistId) throws Exception {
        WatchList watchList=watchListService.findById(watchlistId);
        return ResponseEntity.ok(watchList);
        
    }


    @PatchMapping("/add/coin/{coinId}")
    public ResponseEntity<Coin> addItemToWatchlist(@RequestHeader("Authorization") String jwt,@PathVariable String coinId) throws Exception {

        User user=userService.findUserByJwt(jwt);
        Coin coin=coinService.findById(coinId);
        Coin addedCoin=watchListService.addCoinToWatchList(coin, user);
        return ResponseEntity.ok(addedCoin);
    }



}
