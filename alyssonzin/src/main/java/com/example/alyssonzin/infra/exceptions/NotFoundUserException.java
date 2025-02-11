package com.example.alyssonzin.infra.exceptions;

public class NotFoundUserException extends RuntimeException {
    public NotFoundUserException(Long id) {
        super("User not found with id: " + id);
    }
}
