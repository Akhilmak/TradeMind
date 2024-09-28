package com.akhi.trading_application.request;

import com.akhi.trading_application.domain.OrderType;

import lombok.Data;

@Data
public class CreateOrderRequest {

    private String coinId;
    private double quantity;
    private OrderType orderType;
}
