package com.example.alyssonzin.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.alyssonzin.infra.exceptions.DuplicateCpfException;
import com.example.alyssonzin.infra.exceptions.NotFoundMovieException;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(DuplicateCpfException.class)
    private ResponseEntity<RestErrorResponse> duplicateCpfHandler(DuplicateCpfException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.CONFLICT, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }

    @ExceptionHandler(NotFoundMovieException.class)
    private ResponseEntity<RestErrorResponse> notFoundMovieHandler(NotFoundMovieException exception) {
        RestErrorResponse responseError = new RestErrorResponse(HttpStatus.NOT_FOUND, exception.getMessage());

        return ResponseEntity.status(responseError.getStatus()).body(responseError);
    }
}
