package com.example.alyssonzin.infra.exceptions;

public class NotFoundSeatException extends RuntimeException {
    public NotFoundSeatException(Long id) {
        super("Seat not found with id: " + id);
    }
}
