package com.example.alyssonzin.infra.exceptions;

public class NotFoundOrderException extends RuntimeException {
    public NotFoundOrderException(Long id) {
        super("Order not found with id: " + id);
    }
}
