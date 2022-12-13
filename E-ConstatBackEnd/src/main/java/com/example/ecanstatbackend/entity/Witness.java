package com.example.ecanstatbackend.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Witness {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstname;
    private String lastname;
    private int phone;
    private String email;
    private String address;
    @Column(nullable = true)
    private boolean passenger;
}
