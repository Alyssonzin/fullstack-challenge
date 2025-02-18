package com.example.alyssonzin.entities.session;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alyssonzin.entities.movie.Movie;

public interface SessionRepository extends JpaRepository<Session, Long> {
    Movie findByMovieId(Long movieId);
}
