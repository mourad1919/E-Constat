package com.example.ecanstatbackend.service;

import com.example.ecanstatbackend.entity.Constat;
import com.example.ecanstatbackend.entity.VehiculeInformation;

import java.util.List;

public interface ConstatService {
    int saveConstat(Constat c);
    void modifyConstat(Constat c);
    Constat getConstat(int id);
    List<Constat> getAllConstats();
    void deleteConstat(int id);
    Integer getLastVehiculeInformationId();

    void saveVehiculeInforamtion(VehiculeInformation vehiculeInformation);
    void saveConstatWithVehiculeInformationA(Constat constat,int id);
    int getSizeOfConstatByAccidentSite(String site);
}
