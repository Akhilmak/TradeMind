package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long>{

}
