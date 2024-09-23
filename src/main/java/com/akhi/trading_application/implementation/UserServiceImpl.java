package com.akhi.trading_application.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.config.JwtProvider;
import com.akhi.trading_application.domain.VerificationType;
import com.akhi.trading_application.modal.TwoFactorAuth;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.UserRepository;
import com.akhi.trading_application.service.UserService;

import io.jsonwebtoken.Jwt;

@RestController
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Override
    public User findUserByUserId(Long id) throws Exception{
        Optional<User> user=userRepository.findById(id);
        if(user.isEmpty()){
            throw new Exception("User not Found...!");
        }
        return user.get();    
        
        
    }

    @Override
    public User findUserByEmail(String email) throws Exception{

        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("User not Found....!");
        }
        
        return user;
    }

    @Override
    public User findUserByJwt(String jwt) throws Exception{

        String email=JwtProvider.getEmailFromToken(jwt);

        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("User not Found....!");
        }
        
        return user;
    }

    @Override
    public User updatePassword(User user, String newPassword) {
        user.setPassword(newPassword);
        return userRepository.save(user);
    }

    @Override
    public User enable2FA(VerificationType verificationType, String sendTo, User user) {
        TwoFactorAuth twoFactorAuth=new TwoFactorAuth();
        twoFactorAuth.setEnabled(true);
        twoFactorAuth.setSendTo(verificationType);

        user.setTwoFactorAuth(twoFactorAuth);

        return userRepository.save(user);
    }

}
