package com.akhi.trading_application.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.ForgotPasswordToken;
public interface ForgotPasswordRepository extends JpaRepository<ForgotPasswordToken, String>{

    ForgotPasswordToken findByUserId(Long Id);
}
