package com.akhi.trading_application.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.ForgotPasswordToken;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.ForgotPasswordRepository;
import com.akhi.trading_application.service.ForgotPasswordService;

@Service
public class ForgotPasswordImpl  implements ForgotPasswordService{

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    @Override
    public ForgotPasswordToken creatToken(User user, String id, String otp, VerificationType verificationType,
            String sendTo) {
            ForgotPasswordToken token=new ForgotPasswordToken();
            token.setUser(user);
            token.setOtp(otp);
            token.setVerificationType(verificationType);
            token.setSendTo(sendTo);
            token.setId(id);

            return forgotPasswordRepository.save(token);

    }

    @Override
    public ForgotPasswordToken findById(String id) {
        Optional<ForgotPasswordToken> opt=forgotPasswordRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public ForgotPasswordToken findByUser(Long userId) {
        return forgotPasswordRepository.findByUserId(userId);
    }

    @Override
    public void deleteToken(ForgotPasswordToken token) {
        
        forgotPasswordRepository.delete(token);
    }


