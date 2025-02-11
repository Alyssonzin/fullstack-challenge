package com.example.alyssonzin.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.alyssonzin.infra.exceptions.DuplicateCpfException;
import com.example.alyssonzin.utils.PasswordUtils;

@Service
public class UserService {
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return repository.findById(id);
    }

    public User createUser(User user) {
        // Verifica primeiro se o CPF ja existe
        if (repository.existsByCpf(user.getCpf())) {
            throw new DuplicateCpfException("This CPF already exists");
        }

        user.setPassword(PasswordUtils.encriptPassword(user.getPassword()));
        return repository.save(user);
    }
}
