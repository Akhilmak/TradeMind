package com.akhi.trading_application.modal;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.akhi.trading_application.domain.OrderStatus;
import com.akhi.trading_application.domain.OrderType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @Column(nullable = false)
    private OrderType orderType;

    @Column(nullable = false)
    private BigDecimal price;

    private LocalDateTime time=LocalDateTime.now();

    @Column(nullable = false)
    private OrderStatus status;

    @OneToOne(mappedBy = "order",cascade = CascadeType.ALL)
    private OrderItem orderItem; //one order have only one item
}