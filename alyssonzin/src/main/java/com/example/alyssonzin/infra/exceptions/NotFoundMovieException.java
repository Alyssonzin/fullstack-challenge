package com.example.alyssonzin.infra.exceptions;

public class NotFoundMovieException extends RuntimeException {
    public NotFoundMovieException(Long id) {
        super("Movie not found with id: " + id);
    }
}
