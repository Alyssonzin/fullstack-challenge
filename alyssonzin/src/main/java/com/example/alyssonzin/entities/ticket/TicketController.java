package com.example.alyssonzin.entities.ticket;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alyssonzin.entities.movie.Movie;
import com.example.alyssonzin.entities.movie.MovieService;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    private final TicketService ticketService;
    private final MovieService movieService;

    @Autowired
    public TicketController(TicketService ticketService, MovieService movieService) {
        this.ticketService = ticketService;
        this.movieService = movieService;
    }

    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody TicketRequestDto ticketBody) {
        Ticket newTicket = new Ticket(ticketBody);
        Movie movie = movieService.findById(ticketBody.movieId());
        newTicket.setMovie(movie);

        ticketService.create(newTicket);
        return ResponseEntity.ok(newTicket);
    }

    @GetMapping
    public ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> ticketList = ticketService.findAll();
        return ResponseEntity.ok(ticketList);
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<List<Ticket>> getTicketsByMovieId(@PathVariable Long movieId) {
        List<Ticket> ticketList = ticketService.getTicketsByMovieId(movieId);
        return ResponseEntity.ok(ticketList);
    }
}
