package com.akhi.trading_application.request;

import com.akhi.trading_application.domain.VerificationType;

import lombok.Data;

@Data
public class ForgotPasswordTokenRequest {
 private String sendTo;
 private VerificationType verificationType;
}
