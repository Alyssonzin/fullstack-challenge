package com.example.alyssonzin.filme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    @Autowired
    FilmeRepository repository;

    @PostMapping
    public ResponseEntity<Filme> criaFilme(@RequestBody FilmePayload payload) {
        Filme novoFilme = new Filme(payload);

        this.repository.save(novoFilme);

        return ResponseEntity.ok(novoFilme);
    }

    @GetMapping
    public ResponseEntity<List<Filme>> retornaFilmes(){
        List<Filme> filmesLista = this.repository.findAll();

        return ResponseEntity.ok(filmesLista);
    }
}
