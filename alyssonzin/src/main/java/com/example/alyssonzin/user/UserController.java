package com.example.alyssonzin.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alyssonzin.user.dto.UserRequestDto;
import com.example.alyssonzin.user.dto.UserResponseDto;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserResponseDto> createUser(@RequestBody UserRequestDto userBody) {
        User newUser = new User(userBody);
        userService.createUser(newUser);
        return ResponseEntity.ok(new UserResponseDto(newUser.getName(), newUser.getCpf(), newUser.getEmail()));
    }

    @GetMapping
    public ResponseEntity<List<UserResponseDto>> getAllUsers() {
        List<User> usersList = userService.getAllUsers();

        // Transforma a lista de User em uma lista de UserResponseDto, sem a password
        // dos usuarios
        List<UserResponseDto> response = usersList.stream()
                .map(user -> new UserResponseDto(user.getName(), user.getCpf(), user.getEmail())).toList();

        return ResponseEntity.ok(response);
    }
}
