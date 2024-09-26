package com.akhi.trading_application.modal;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;


//watchlist of coins of user
@Data
@Entity
public class WatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;//one user can have only one watchlist

    @ManyToMany
    private List<Coin> coins=new ArrayList<>();//List of coins in watchList


}
