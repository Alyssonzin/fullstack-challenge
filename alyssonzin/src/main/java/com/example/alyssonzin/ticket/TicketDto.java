package com.example.alyssonzin.ticket;

import com.example.alyssonzin.movie.Movie;

public record TicketDto(Movie movie) {
    public TicketDto {
        if (movie == null) {
            throw new IllegalArgumentException("movie is required");
        }
    }
}
