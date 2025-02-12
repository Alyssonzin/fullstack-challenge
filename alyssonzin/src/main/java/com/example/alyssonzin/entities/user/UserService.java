package com.example.alyssonzin.entities.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.alyssonzin.infra.exceptions.DuplicateCpfException;
import com.example.alyssonzin.infra.exceptions.DuplicateEmailException;
import com.example.alyssonzin.infra.exceptions.NotFoundUserException;
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

    public User findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundUserException(id));
    }

    public User createUser(User user) {
        // Verifica primeiro se o CPF ja existe
        if (repository.existsByCpf(user.getCpf())) {
            throw new DuplicateCpfException("This CPF already exists");
        } else if (repository.existsByEmail(user.getEmail())) {
            throw new DuplicateEmailException("This email already exists");
        }

        user.setPassword(PasswordUtils.encriptPassword(user.getPassword()));
        return repository.save(user);
    }
}
