package com.example.ecanstatbackend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class DriverInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstname;
    private String lastname;
    private String adress;
    private String licenceNumber;
    @Temporal(TemporalType.DATE)
    private Date licenceDate;
}
