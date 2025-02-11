package com.example.alyssonzin.entities.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alyssonzin.OrderStatus;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);

    List<Order> findByStatus(OrderStatus status);
}
