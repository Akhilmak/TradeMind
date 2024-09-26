package com.akhi.trading_application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.akhi.trading_application.domain.OrderType;
import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.request.CreateOrderRequest;
import com.akhi.trading_application.service.CoinService;
import com.akhi.trading_application.service.OrderService;
import com.akhi.trading_application.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @Autowired
    private CoinService coinService;

    // private WalletTra

    @PostMapping("/pay")
    ResponseEntity<Order> payOrderpayment(@RequestHeader("Authorization") String jwt,
            @RequestBody CreateOrderRequest req) throws Exception {
        User user = userService.findUserByJwt(jwt);
        Coin coin = coinService.findById(req.getCoinId());

        Order order = orderService.processOrder(coin, req.getQuantity(), req.getOrderType(), user);
        return ResponseEntity.ok(order);

    }

    @PostMapping("/{orderId}")
    ResponseEntity<Order> getOrderById(@RequestHeader("Authorization") String jwt,@PathVariable Long orderId) throws Exception{
        
        User user=userService.findUserByJwt(jwt);
        Order order=orderService.getOrderById(orderId);
        if(order.getUser().getId().equals(user.getId())){
            return ResponseEntity.ok(order);
        }else{
            throw new Exception("Unauthorized Access...!");
        }
    }

    @GetMapping()
    public ResponseEntity<List<Order>> getA1lOrdersForUser(@RequestHeader("Authorization") String jwtToken,
            @RequestParam(required = false) OrderType orderType, @RequestParam(required = false) String assetSymbol)
            throws Exception {
       


        Long userId=userService.findUserByJwt(jwtToken).getId();

        List<Order> userOrders=orderService.getAllOrders(userId, orderType, assetSymbol);
        return  ResponseEntity.ok(userOrders);
    }
}
