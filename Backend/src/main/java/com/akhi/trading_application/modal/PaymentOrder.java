package com.akhi.trading_application.modal;

import com.akhi.trading_application.domain.PaymentMethod;
import com.akhi.trading_application.domain.PaymentStatus;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PaymentOrder {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private Long amount;

    private PaymentStatus status;

    private PaymentMethod paymentMethod;

    @ManyToOne//One user have many Payments
    private User user;
}
