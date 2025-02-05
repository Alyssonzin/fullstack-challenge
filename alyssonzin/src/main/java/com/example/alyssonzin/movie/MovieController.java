package com.example.alyssonzin.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    MovieService movieService;

    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody MovieDto movieBody) {
        Movie newMovie = new Movie(movieBody);
        movieService.create(newMovie);

        return ResponseEntity.ok(newMovie);
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movieList = movieService.getAllMovies();

        return ResponseEntity.ok(movieList);
    }
}
