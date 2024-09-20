package com.akhi.trading_application.service;

import com.akhi.trading_application.modal.TwoFactorOTP;
import com.akhi.trading_application.modal.User;

public class TwoFactorOtpServiceImpl implements TwoFactorOTPService{

    @Override
    public TwoFactorOTP createTwoFactorOTP(User user, String otp, String jwt) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createTwoFactorOTP'");
    }

    @Override
    public TwoFactorOTP findByUser(Long userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByUser'");
    }

    @Override
    public TwoFactorOTP findById(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

    @Override
    public boolean verifyTwoFactorOtp(TwoFactorOTP twoFactorOTP, String otp) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'verifyTwoFactorOtp'");
    }

    @Override
    public void deleteTwoFactorOTP(TwoFactorOTP twoFactorOTP) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteTwoFactorOTP'");
    }

}
