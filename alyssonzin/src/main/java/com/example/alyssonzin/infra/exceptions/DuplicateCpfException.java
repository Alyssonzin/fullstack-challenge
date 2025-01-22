package com.example.alyssonzin.infra.exceptions;

public class DuplicateCpfException extends RuntimeException {

    public DuplicateCpfException(String message) {
        super(message);
    }
    
}
