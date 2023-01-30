package com.example.ecanstatbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Optional;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private String username;
    private String profil;

    public UserDTO(String subject, Optional<? extends GrantedAuthority> first) {

        this.username=subject;
    }
}
