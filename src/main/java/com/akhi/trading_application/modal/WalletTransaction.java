package com.akhi.trading_application.modal;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class WalletTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Wallet wallet; //One Wallet may Have many Transactions
    

    private WalletTransactionType walletTransactionType;;

    private LocalDate date;

    private String transferId;

    private String purpose;

    private Long amount;
}
