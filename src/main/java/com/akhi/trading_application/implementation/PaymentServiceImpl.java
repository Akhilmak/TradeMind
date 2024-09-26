package com.akhi.trading_application.implementation;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.akhi.trading_application.domain.PaymentMethod;
import com.akhi.trading_application.domain.PaymentStatus;
import com.akhi.trading_application.modal.PaymentOrder;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.PaymentDetailsRepository;
import com.akhi.trading_application.repository.PaymentRepository;
import com.akhi.trading_application.response.PaymentResponse;
import com.akhi.trading_application.service.PaymentService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecretKey;

    @Override
    public PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod) {
        PaymentOrder payment = new PaymentOrder();
        payment.setUser(user);
        payment.setAmount(amount);
        payment.setPaymentMethod(paymentMethod);
        return paymentRepository.save(payment);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) throws Exception {
        return paymentRepository.findById(id).orElseThrow(() -> new Exception("Payment Order not found...!"));
    }

    @Override
    public Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws Exception {
        if (paymentOrder.getStatus().equals(PaymentStatus.PENDING)) {
            if (paymentOrder.getPaymentMethod().equals(PaymentMethod.RAZORPAY)) {
                RazorpayClient razorPay = new RazorpayClient(apiKey, apiSecretKey);
                Payment payment = razorPay.payments.fetch(paymentId);
                Integer amount = payment.get("amount");
                String status = payment.get("status");
                if (status.equals("captured")) {
                    paymentOrder.setStatus(PaymentStatus.SUCCESS);
                    paymentRepository.save(paymentOrder);
                    return true;
                }
                paymentOrder.setStatus(PaymentStatus.FAILED);
                paymentRepository.save(paymentOrder);
                return false;
            }
            paymentOrder.setStatus(PaymentStatus.SUCCESS);
            paymentRepository.save(paymentOrder);
            return true;
        }
        return false;
    }

    @Override
    public PaymentResponse createRazorpayPaymentLink(User user, Long amount) throws Exception {
        amount = amount * 100; // amount should be in cents
        try {
            // Instatiaze RazorPay Client with apiKey and Api Secret Key
            RazorpayClient razorPay = new RazorpayClient(apiKey, apiSecretKey);

            // Create a JSON Object with the ayment link request parameters

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", amount);
            paymentLinkRequest.put("currency", "INR");

            // create Json Object with customer details

            JSONObject customer = new JSONObject();
            customer.put("name", user.getFullName());
            customer.put("email", user.getEmail());
            paymentLinkRequest.put("customer", customer);

            // Create JsonObject with notification Settings

            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            // Remainder Settings

            paymentLinkRequest.put("remainder_enable", true);

            // Call-Back Url ie:after successfull payment user will be called back to this
            // url
            paymentLinkRequest.put("callback_url", "https://localhost:8080/wallet");
            paymentLinkRequest.put("callback_method", "get");

            PaymentLink payment = razorPay.paymentLink.create(paymentLinkRequest); // creats short url for payment

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");
            PaymentResponse res = new PaymentResponse();
            res.setPaymentURL(paymentLinkUrl);
            return res;

        } catch (RazorpayException e) {
            System.out.println("Error Creating Payment Link....:" + e.getMessage());
            throw new RazorpayException(e.getMessage());
        }

    }

    @Override
    public PaymentResponse createStripePaymentLink(User user, Long amount, Long orderId) {
        Stripe.apiKey=stripeSecretKey;
        SessionCreateParams params=new SessionCreateParams.Builder()
            .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
            .setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl("https://localhost:8080/wallet?orderId="+orderId)
            .setCancelUrl("https://localhost:8080/payment/cancel")
            .addLineItem(SessionCreateParams.LineItem.builder(
                .setQuantity(1L)
                .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                    .setCurrency("usd")
                    .setUnitAmount(amount*100)
                    .setProductData(SessionCreateParams
                        .LineItem
                        .PriceData
                        .ProductData
                        .builder()
                        .setName("TopUp Wallet")
                        .build())
                    .build())
                .build())
            .build();   
        Session session=Session.create(params);
        System.out.println("Session....."+session);
        PaymentResponse res=new PaymentResponse();
        res.setPaymentURL(session.getUrl());
        return res;


    }

}
