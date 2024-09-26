package com.akhi.trading_application.implementation;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.akhi.trading_application.domain.OrderStatus;
import com.akhi.trading_application.domain.OrderType;
import com.akhi.trading_application.modal.Asset;
import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.Order;
import com.akhi.trading_application.modal.OrderItem;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.OrderItemRepository;
import com.akhi.trading_application.repository.OrderRepository;
import com.akhi.trading_application.service.AssetService;
import com.akhi.trading_application.service.OrderService;
import com.akhi.trading_application.service.WalletService;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private WalletService walletService;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AssetService assetService;
    @Override
    public Order createOrder(User user, OrderItem orderItem, OrderType orderType) {

        double price=orderItem.getCoin().getCurrentPrice()*orderItem.getQuantity();
        Order order=new Order();
        order.setOrderItem(orderItem);
        order.setOrderType(orderType);
        order.setPrice(BigDecimal.valueOf(price));
        order.setStatus(OrderStatus.PENDING);
        order.setTime(LocalDateTime.now());

        return orderRepository.save(order);


    }

    @Override
    public Order getOrderById(Long OrderId) throws Exception{
        return orderRepository.findById(OrderId).orElseThrow(()->new Exception("Order not found"));
    }
    private OrderItem creatOrderItem(Coin coin,double quantity,double buyPrice,double sellPrice){

        OrderItem orderItem=new OrderItem();
        orderItem.setCoin(coin);
        orderItem.setQuantity(quantity);
        orderItem.setBuyPrice(buyPrice);
        orderItem.setSellPrice(sellPrice);
        return orderItemRepository.save(orderItem); 
    }

    @Transactional
    public Order buyAsset(Coin coin,double quantity,User user) throws Exception{
        if(quantity<=0){
            throw new Exception("Quantity Should be greater than 0");
        }

        double buyPrice=coin.getCurrentPrice();

        OrderItem orderItem=creatOrderItem(coin,quantity,buyPrice,0);
        Order order=createOrder(user, orderItem, OrderType.BUY);
        orderItem.setOrder(order);
        walletService.payOrderPayment(order, user);
        order.setStatus(OrderStatus.SUCCESS);
        order.setOrderType(OrderType.BUY);
        Order savedOrder=orderRepository.save(order);

        //create an Asset

        Asset oldAsset=assetService.findAssetByUserIdAndCoinId(order.getUser().getId(), order.getOrderItem().getCoin().getId());

        if(oldAsset==null){
            assetService.createAsset(user, orderItem.getCoin(), orderItem.getQuantity());
        }else{
            assetService.updateAsset(oldAsset.getId(), quantity);
        }

        return savedOrder;
    }

    @Transactional
    public Order sellAsset(Coin coin,double quantity,User user) throws Exception{
        if(quantity<=0){
            throw new Exception("Quantity Should be greater than 0");
        }

        double sellPrice=coin.getCurrentPrice();

        Asset assetToSell=assetService.findAssetByUserIdAndCoinId(user.getId(), coin.getId());
        double buyPrice=assetToSell.getBuyPrice();
        if(assetToSell!=null){
        OrderItem orderItem=creatOrderItem(coin,quantity,sellPrice,buyPrice);
        Order order=createOrder(user, orderItem, OrderType.SELL);
        orderItem.setOrder(order);
        if(assetToSell.getQuantity()>=quantity){
            order.setStatus(OrderStatus.SUCCESS);
            order.setOrderType(OrderType.SELL);
            Order savedOrder=orderRepository.save(order);
             walletService.payOrderPayment(order, user);

             Asset updatedAsset=assetService.updateAsset(assetToSell.getId(),-quantity);

             if(updatedAsset.getQuantity()*coin.getCurrentPrice()<=1){
                assetService.deleteAsset(updatedAsset.getId());
             }
             return savedOrder; 
        }
        throw new Exception("Insufficient Quantity to Sell....!");
    }
    // throw new Exception("Asset not found");
        
}


    
    @Override
    @Transactional
    public Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception{

        if(orderType==OrderType.BUY){
            return buyAsset(coin,quantity,user);
        }else if(orderType==OrderType.SELL){
            return sellAsset(coin,quantity,user);
        }
        throw new Exception("Invalid Order Type");
    }

    @Override
    public List<Order> getAllOrders(Long userId, OrderType orderType, String assetSymbol) {
        return orderRepository.findByUserId(userId);
    }


}
