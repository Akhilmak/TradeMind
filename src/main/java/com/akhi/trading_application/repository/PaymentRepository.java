package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.PaymentOrder;

public interface PaymentRepository extends JpaRepository<PaymentOrder, Long> {

}
