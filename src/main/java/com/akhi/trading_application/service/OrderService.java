package com.akhi.trading_application.service;

import java.util.List;

import com.akhi.trading_application.domain.OrderType;
import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.OrderItem;
import com.akhi.trading_application.modal.User;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem,OrderType orderType);

    Order getOrderById(Long OrderId);

    List<Order> getAllOrders(Long userId,OrderType orderType,String assetSymbol);

    Order processOrder(Coin coin,double quantity,OrderType orderType, User user); 

}
