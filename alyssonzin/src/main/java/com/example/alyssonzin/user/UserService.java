package com.example.alyssonzin.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAllUsers() {
        return this.repository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return this.repository.findById(id);
    }

    public User createUser(User user) {
        return this.repository.save(user);
    }
}
