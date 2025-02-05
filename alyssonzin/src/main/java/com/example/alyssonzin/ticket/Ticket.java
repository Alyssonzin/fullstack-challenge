package com.example.alyssonzin.ticket;

import com.example.alyssonzin.movie.Movie;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Um movie pode ter vários tickets, mas um ticket só pode pertencer a um movie
    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    private Movie movie;

    public Ticket() {

    }

    public Ticket(TicketDto data) {
        this.movie = data.movie();
    }

    public Long getId() {
        return id;
    }

    public Movie getMovie() {
        return movie;
    }
}
