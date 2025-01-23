package com.example.alyssonzin.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    //Verifica se existe um usuário com o CPF informado
    boolean existsByCpf(String cpf);
}
