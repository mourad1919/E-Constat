package com.example.ecanstatbackend.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class VehiculeInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(cascade = CascadeType.ALL)
    private InsurenceCompanyInformation insurenceCompanyInformation;
    @OneToOne(cascade = CascadeType.ALL)
    private DriverInformation driverInformation;
    @OneToOne(cascade = CascadeType.ALL)
    private InsuredInforamation insuredInforamation;
    @OneToOne(cascade = CascadeType.ALL)
    private Vehicule vehicule;
    private String apperantDamage;
    private String observation;
    private String signature;

}
