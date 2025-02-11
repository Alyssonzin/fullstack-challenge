package com.example.alyssonzin.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.alyssonzin.infra.exceptions.DuplicateCpfException;
import com.example.alyssonzin.infra.exceptions.NotFoundMovieException;
import com.example.alyssonzin.infra.exceptions.NotFoundOrderException;
import com.example.alyssonzin.infra.exceptions.NotFoundSeatException;
import com.example.alyssonzin.infra.exceptions.NotFoundUserException;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    // CPF ja existe
    @ExceptionHandler(DuplicateCpfException.class)
    private ResponseEntity<RestErrorResponse> duplicateCpfHandler(DuplicateCpfException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.CONFLICT, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }

    // Filme nao encontrado
    @ExceptionHandler(NotFoundMovieException.class)
    private ResponseEntity<RestErrorResponse> notFoundMovieHandler(NotFoundMovieException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.NOT_FOUND, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }

    // Assento nao encontrado
    @ExceptionHandler(NotFoundSeatException.class)
    private ResponseEntity<RestErrorResponse> notFoundSeatHandler(NotFoundSeatException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.NOT_FOUND, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }

    // Pedido nao encontrado
    @ExceptionHandler(NotFoundOrderException.class)
    private ResponseEntity<RestErrorResponse> notFoundOrderHandler(NotFoundOrderException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.NOT_FOUND, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }

    // Usuario nao encontrado
    @ExceptionHandler(NotFoundUserException.class)
    private ResponseEntity<RestErrorResponse> notFoundUserHandler(NotFoundUserException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.NOT_FOUND, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }
}
