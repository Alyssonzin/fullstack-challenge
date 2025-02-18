package com.example.alyssonzin.entities.session;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/session")
public class SessionController {
    private final SessionService sessionService;

    @Autowired
    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<List<Session>> getSessionsByMovie(@PathVariable Long movieId) {
        List<Session> sessionList = sessionService.getSessionsByMovie(movieId);
        return ResponseEntity.ok(sessionList);
    }
}
