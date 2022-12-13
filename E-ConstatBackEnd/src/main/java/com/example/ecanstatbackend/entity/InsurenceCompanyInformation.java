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
public class InsurenceCompanyInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String insurenceCompanyName;
    private String insuranceContractNumber;
    private String AgencyName;
    @Temporal(TemporalType.DATE)
    private Date begingDate;
    @Temporal(TemporalType.DATE)
    private Date endDate;
}
