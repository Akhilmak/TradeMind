package com.akhi.trading_application.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.config.JwtProvider;
import com.akhi.trading_application.modal.TwoFactorOTP;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.UserRepository;
import com.akhi.trading_application.response.AuthResponse;
import com.akhi.trading_application.service.CustomUserDetailsService;
import com.akhi.trading_application.service.EmailService;
import com.akhi.trading_application.service.TwoFactorOTPService;
import com.akhi.trading_application.service.WatchListService;
import com.akhi.trading_application.utils.OtpUtils;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WatchListService watchListService;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private TwoFactorOTPService twoFactorOTPService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> register(@RequestBody User user) throws Exception{

        User existedUser = userRepository.findByEmail(user.getEmail());
        
        if (existedUser != null) {
            System.out.println("User exists");
            throw new Exception("User already exists");
        }
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setFullName(user.getFullName());

        User savedUser = userRepository.save(newUser);

        watchListService.createWatchList(savedUser);

        Authentication auth = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt=JwtProvider.generateToken(auth);

        AuthResponse response = new AuthResponse();
        response.setJwt(jwt);
        response.setStatus(true);
        response.setMessage("Registration Successfull.....!");
        return new ResponseEntity<>(response , HttpStatus.CREATED);

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> login(@RequestBody User user) throws Exception{

        String userName=user.getEmail();
        String password=user.getPassword();
        

        Authentication auth = authenticate(userName,password);
        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt=JwtProvider.generateToken(auth);

        User authUser=userRepository.findByEmail(userName);

        if(user.getTwoFactorAuth().isEnabled()){
            AuthResponse response = new AuthResponse();
            response.setMessage("Two Factor Authentication Enabled......!");
            response.setTwoFactorAuthEnabled(true);
            String otp=OtpUtils.generateOtp();

            TwoFactorOTP oldTwoFactorOTP = twoFactorOTPService.findByUser(authUser.getId());//checks if there is an old otp
            if(oldTwoFactorOTP!=null){
                twoFactorOTPService.deleteTwoFactorOTP(oldTwoFactorOTP);//if old otp is present it will delete it
            }

            TwoFactorOTP newTwoFactorOTP=twoFactorOTPService.createTwoFactorOTP(authUser,otp,jwt);//creates new OTP

            emailService.sendVerificationOtpEmail(userName, otp);

            response.setSession(newTwoFactorOTP.getId());

            return new ResponseEntity<>(response , HttpStatus.ACCEPTED);
        }
        AuthResponse response = new AuthResponse();
        response.setJwt(jwt);
        response.setStatus(true);
        response.setMessage("login Successfull.....!");
        return new ResponseEntity<>(response , HttpStatus.CREATED);
    }

    private Authentication authenticate(String userName, String password) throws Exception {
        UserDetails userDetais=customUserDetailsService.loadUserByUsername(userName);
        if(userDetais==null){
            throw new BadCredentialsException("Invalid Username....!");
        }
        if(!password.equals(userDetais.getPassword())){
            throw new BadCredentialsException("Invalid Password....!");
        }

        return new UsernamePasswordAuthenticationToken(userDetais, password, userDetais.getAuthorities());

    }

    @PostMapping("/two-factor/otp/{otp}")
    public ResponseEntity<AuthResponse> verifySigninOtp(@PathVariable String otp, @RequestParam String id) throws Exception{

        TwoFactorOTP twoFactorOTP=twoFactorOTPService.findById(id);

        if(twoFactorOTPService.verifyTwoFactorOtp(twoFactorOTP,otp)){
            AuthResponse response = new AuthResponse();
            response.setMessage("Two Factor Authentication Successfull.....!");
            response.setTwoFactorAuthEnabled(true);
            response.setJwt(twoFactorOTP.getJwt());
            
            return new ResponseEntity<>(response , HttpStatus.OK);

        }
        throw new Exception("Invalid OTP....!");

    }


}
