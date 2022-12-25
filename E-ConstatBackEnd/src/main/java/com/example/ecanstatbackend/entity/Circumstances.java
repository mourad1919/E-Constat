package com.example.ecanstatbackend.entity;

import lombok.*;

import javax.persistence.Entity;


public enum Circumstances {
    EN_STATIONNEMENT,QUITTAI_UN_STATIONNEMENT,
    PRENAIT_UN_STATIONNEMENT,SORTAIT_D_UN_PARKING_OU_UN_LIEU_PRIVÉ,
    S_ENGAGEAIT_DANS_UN_PARKING, ARRÊT_DE_CIRCULATION,
    HEURTAIT_À_L_ARRIÈRE,FROTTEMENT_SANS_CHANGEMENT_DE_FILE
}
