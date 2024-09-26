package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.PaymentDetails;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails,Long>{
    PaymentDetails findUserById(Long userId);

}
