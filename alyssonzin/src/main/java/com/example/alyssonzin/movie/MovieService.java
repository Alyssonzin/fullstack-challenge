package com.example.alyssonzin.movie;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.alyssonzin.infra.exceptions.NotFoundMovieException;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Movie create(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie update(Movie movie) {
        return movieRepository.save(movie);
    }

    public void delete(Long id) {
        movieRepository.deleteById(id);
    }

    public Movie findById(Long id) {
        return movieRepository.findById(id).orElseThrow(() -> new NotFoundMovieException("Movie not found"));
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
