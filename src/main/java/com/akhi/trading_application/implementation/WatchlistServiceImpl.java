package com.akhi.trading_application.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.WatchList;
import com.akhi.trading_application.repository.WatchlistRepository;
import com.akhi.trading_application.service.WatchListService;

@Service
public class WatchlistServiceImpl implements WatchListService{

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Override
    public WatchList findUserWatchList(Long userId) throws Exception{
        WatchList watchList=watchlistRepository.findByUserId(userId);
        if(watchList==null){
            throw new Exception("WatchList not found....");;
        }
        return watchList;
    }

    @Override
    public WatchList createWatchList(User user) {
        WatchList watchList=new WatchList();
        watchList.setUser(user);
        return watchlistRepository.save(watchList);
    }

    @Override
    public WatchList findById(Long id) throws Exception{
        Optional<WatchList> watchlist=watchlistRepository.findById(id);
        if(watchlist.isEmpty()){
            throw new Exception("WatchList not found...!");
        }
        return watchlist.get();
    }

    @Override
    public Coin addCoinToWatchList(Coin coin, User user) throws Exception{
        WatchList watchList=findUserWatchList(user.getId());
        if(watchList.getCoins().contains(coin)){
            watchList.getCoins().remove(coin);
        }else{
            watchList.getCoins().add(coin);
        }
        watchlistRepository.save(watchList);
        return coin;
    }

}
