package com.akhi.trading_application.modal;


import com.akhi.trading_application.domain.VerificationType;

import lombok.Data;

@Data
public class TwoFactorAuth {
    private boolean isEnabled=false;
    private VerificationType sendTo;
}
