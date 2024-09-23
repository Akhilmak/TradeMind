package com.akhi.trading_application.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.VerificationCode;
import com.akhi.trading_application.repository.VerificationCodeRepository;
import com.akhi.trading_application.service.VerificationCodeService;
import com.akhi.trading_application.utils.OtpUtils;


@Service
public class VerificationCodeServiceImpl implements VerificationCodeService{


    @Autowired
    private VerificationCodeRepository verificationCodeRepository;
    

    @Override
    public VerificationCode getVerificationCodeById(Long id) throws Exception {
        Optional<VerificationCode> opt=verificationCodeRepository.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new Exception("Verification code not found");
    }

    @Override
    public VerificationCode getVerificationCodeByUser(Long UserId) {

        return verificationCodeRepository.findByUserId(id);
    }

    @Override
    public void deleteVerificationCodeById(VerificationCode code) {
        verificationCodeRepository.delete(code);
    }

    @Override
    public VerificationCode sendVerificationCode(User user, VerificationType verificationType) {
        VerificationCode code=new VerificationCode();
        code.setOtp(OtpUtils.generateOtp());
        code.setVerificationType(verificationType);
        code.setUser(user);
        return verificationCodeRepository.save(code);
    }

    


}
