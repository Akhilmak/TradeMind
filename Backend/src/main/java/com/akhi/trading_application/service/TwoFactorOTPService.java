package com.akhi.trading_application.service;

import com.akhi.trading_application.modal.TwoFactorOTP;
import com.akhi.trading_application.modal.User;

public interface TwoFactorOTPService {

    TwoFactorOTP createTwoFactorOTP(User user, String otp, String jwt);

    TwoFactorOTP findByUser(Long userId);

    TwoFactorOTP findById(String id);

    boolean verifyTwoFactorOtp(TwoFactorOTP twoFactorOTP, String otp);

    void deleteTwoFactorOTP(TwoFactorOTP twoFactorOTP);
    
} 
