package com.example.alyssonzin.entities.movie;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "runtime", nullable = false)
    private Integer runtime;

    public Movie() {

    }

    public Movie(MovieDto data) {
        this.id = data.id();
        this.name = data.name();
        this.runtime = data.runtime();
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
}