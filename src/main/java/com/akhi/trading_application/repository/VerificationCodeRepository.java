package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.VerificationCode;

public interface VerificationCodeRepository  extends JpaRepository<VerificationCode, Long>{
  
    public VerificationCode findByUserId(Long id);
    
} 
