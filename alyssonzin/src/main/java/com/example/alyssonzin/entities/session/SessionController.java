package com.example.alyssonzin.entities.session;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alyssonzin.entities.movie.MovieService;

@RestController
@RequestMapping("/session")
public class SessionController {
    private final SessionService sessionService;
    private final MovieService movieService;

    @Autowired
    public SessionController(SessionService sessionService, MovieService movieService) {
        this.sessionService = sessionService;
        this.movieService = movieService;
    }
}
