package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.TwoFactorOTP;

public interface TwoFactorOtpRepository extends JpaRepository<TwoFactorOTP, String> {

    TwoFactorOTP findByUserId(Long userId);
}
