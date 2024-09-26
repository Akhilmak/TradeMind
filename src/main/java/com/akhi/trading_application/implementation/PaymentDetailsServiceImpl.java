package com.akhi.trading_application.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.modal.PaymentDetails;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.PaymentDetailsRepository;
import com.akhi.trading_application.service.PaymentDetailsService;

@Service
public class PaymentDetailsServiceImpl implements PaymentDetailsService{

    @Autowired
    private PaymentDetailsRepository paymentDetailsRepository;
    @Override
    public PaymentDetails addPaymentDetails(String accountNumber, String ifscCode, String bankName,
            String accountHolderName, User user) {
                PaymentDetails paymentDetails = new PaymentDetails();
                paymentDetails.setAccountHolderName(accountHolderName);
                paymentDetails.setAccountNumber(accountNumber);
                paymentDetails.setBankName(bankName);
                paymentDetails.setIfscCode(ifscCode);
                paymentDetails.setUser(user);
                return paymentDetailsRepository.save(paymentDetails);
    }

    @Override
    public PaymentDetails getUsersPaymentDetails(User user) {
        return paymentDetailsRepository.findUserById(user.getId());
    }

}
