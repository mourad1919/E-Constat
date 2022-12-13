package com.example.ecanstatbackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Constat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    //@JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd HH:mm:ss[.SSS][.SS][.S]")
    private Date accidentDate;
    private String accidentSite;
    private boolean hurtPeople;
    private boolean materialDamageOtherThenAorB;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Witness> witness;
    @OneToOne(cascade = CascadeType.ALL)
    private VehiculeInformation vehiculeInformationA;
    @OneToOne(cascade = CascadeType.ALL)
    private VehiculeInformation vehiculeInformationB;
    @Enumerated(EnumType.STRING)
    private Circumstances circumstances;
    private String sketch;

}
