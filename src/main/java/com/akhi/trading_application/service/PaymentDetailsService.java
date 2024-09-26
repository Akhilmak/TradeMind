package com.akhi.trading_application.service;

import com.akhi.trading_application.modal.PaymentDetails;
import com.akhi.trading_application.modal.User;

public interface PaymentDetailsService {

    PaymentDetails addPaymentDetails(String accountNumber, String ifscCode, String bankName, String accountHolderName, User user);
    PaymentDetails getUsersPaymentDetails(User user);
}
