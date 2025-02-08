package com.example.alyssonzin.movie;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "runtime")
    private Integer runtime;

    @Column(name = "tmdb_id")
    private Integer tmdbId;

    public Movie() {

    }

    public Movie(MovieDto data) {
        this.name = data.name();
        this.runtime = data.runtime();
        this.tmdbId = data.tmdbId();
    }

    public Long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public Integer getRuntime() {
        return runtime;
    }

    public void setTmdbId(Integer tmdbId) {
        this.tmdbId = tmdbId;
    }

    public Integer getTmdbId() {
        return tmdbId;
    }
}