package com.akhi.trading_application.service;

import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.ForgotPasswordToken;
import com.akhi.trading_application.modal.User;

public interface ForgotPasswordService {
    ForgotPasswordToken creatToken(User user, String id, String otp, VerificationType verificationType, String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);




    
} 
