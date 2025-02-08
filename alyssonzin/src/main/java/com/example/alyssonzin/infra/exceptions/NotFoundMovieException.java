package com.example.alyssonzin.infra.exceptions;

public class NotFoundMovieException extends RuntimeException {

    public NotFoundMovieException(String message) {
        super(message);
    }
}
