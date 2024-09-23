package com.akhi.trading_application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.Order;

public interface OrderRepository extends JpaRepository<Order,Long>{

    List<Order> findByUserId(Long userId);

}
