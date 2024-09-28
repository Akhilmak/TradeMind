package com.akhi.trading_application.service;

import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.modal.VerificationCode;

public interface VerificationCodeService {

    VerificationCode sendVerificationCode(User user, VerificationType verificationType);

    VerificationCode getVerificationCodeById(Long id) throws Exception;

    VerificationCode getVerificationCodeByUser(Long userId);

    void deleteVerificationCodeById(VerificationCode code);
}
