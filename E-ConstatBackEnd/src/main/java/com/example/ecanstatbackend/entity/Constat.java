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

    @Column(name = "vld")
    private Integer vld;

    @Column(name = "date_demande")
    private LocalDateTime dateDemande;

    @Column(name = "init_by")
    private String initBy;

    @Column(name = "last_edit")
    private LocalDateTime dateEdit;

    @Column(name = "edit_by")
    private String editBy;

    @Column(name = "observation")
    private String observation;


    @OneToMany(cascade = CascadeType.ALL)
    private List<Witness> witness;
    @OneToOne(cascade = CascadeType.ALL)
    private VehiculeInformation vehiculeInformationA;
    @OneToOne(cascade = CascadeType.ALL)
    private VehiculeInformation vehiculeInformationB;

    private String sketch;

}
