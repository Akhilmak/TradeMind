package com.akhi.trading_application.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.modal.TwoFactorOTP;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.TwoFactorOtpRepository;


@Service
public class TwoFactorOtpServiceImpl implements TwoFactorOTPService{


    @Autowired
    private TwoFactorOtpRepository twoFactorOtpRepository;
    @Override
    public TwoFactorOTP createTwoFactorOTP(User user, String otp, String jwt) {
        UUID uuid=UUID.randomUUID();
        String id=uuid.toString();

        TwoFactorOTP twoFactorOTP=new TwoFactorOTP();
        twoFactorOTP.setId(id);
        twoFactorOTP.setJwt(jwt);
        twoFactorOTP.setOtp(otp);
        twoFactorOTP.setUser(user);

        
        return twoFactorOtpRepository.save(twoFactorOTP);
    }

    @Override
    public TwoFactorOTP findByUser(Long userId) {
        
        return twoFactorOtpRepository.findByUserId(userId);
    }

    @Override
    public TwoFactorOTP findById(String id) {
        Optional<TwoFactorOTP> opt = twoFactorOtpRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public boolean verifyTwoFactorOtp(TwoFactorOTP twoFactorOTP, String otp) {

        return twoFactorOTP.getOtp().equals(otp);
    }

    @Override
    public void deleteTwoFactorOTP(TwoFactorOTP twoFactorOTP) {
        twoFactorOtpRepository.delete(twoFactorOTP);
    }

}