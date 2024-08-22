package com.example.alyssonzin.filme;

import jakarta.persistence.*;

import java.beans.ConstructorProperties;

@Entity
@Table(name = "filmes")
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "imageUrl", nullable = false)
    private String imageUrl;

    public Filme(){

    }

    public Filme(FilmePayload data) {
        this.nome = data.nome();
        this.imageUrl = data.imageUrl();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
