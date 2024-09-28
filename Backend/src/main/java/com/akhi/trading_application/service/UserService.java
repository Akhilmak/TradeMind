package com.akhi.trading_application.service;

import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.User;

public interface UserService {
    public User findUserByUserId(Long id) throws Exception;
    public User findUserByEmail(String email) throws Exception;
    public User findUserByJwt(String jwt) throws Exception;
    
    public User enable2FA(VerificationType verificationType,String sendTo,User user); // send tois the method to receive otp i.e mobile or Email

    public User updatePassword(User user,String newPassword);
}
