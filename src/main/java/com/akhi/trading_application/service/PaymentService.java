package com.akhi.trading_application.service;

import com.akhi.trading_application.domain.PaymentMethod;
import com.akhi.trading_application.modal.PaymentOrder;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.response.PaymentResponse;

public interface PaymentService {
    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);
    PaymentOrder getPaymentOrderById(Long Id) throws Exception;

    Boolean proceedPaymentOrder(PaymentOrder paymentOrder,String paymentId)throws Exception;

    PaymentResponse createRazorpayPaymentLink(User user,Long amount, Long orderId) throws Exception;

    PaymentResponse createStripePaymentLink(User user,Long amount, Long orderId) throws Exception;

}
