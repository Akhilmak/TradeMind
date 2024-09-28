package com.akhi.trading_application.service;

import java.util.List;

import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.Withdrawal;

public interface WithdrawalService {

    Withdrawal requestWithdrawal(Long amount, User user);

    Withdrawal proceedWithdrawal(Long withdrawalId,boolean accept) throws Exception;

    List<Withdrawal> getUsersWithdrawalHistory(User user);

    List<Withdrawal> getAllWithdrawals();

}
