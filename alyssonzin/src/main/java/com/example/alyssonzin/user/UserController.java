package com.example.alyssonzin.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    UserRepository repository;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserPayload payload) {
        User newUser = new User(payload);

        this.repository.save(newUser);

        return ResponseEntity.ok(newUser);
    }
}
