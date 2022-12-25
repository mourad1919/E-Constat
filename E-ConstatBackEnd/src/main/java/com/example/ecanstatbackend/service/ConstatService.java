package com.example.ecanstatbackend.service;

import com.example.ecanstatbackend.entity.Constat;
import com.example.ecanstatbackend.entity.VehiculeInformation;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ConstatService {
    int saveConstat(Constat c);
    void modifyConstat(Constat c);
    Constat getConstat(int id);
    List<Constat> getAllConstats();
    void deleteConstat(int id);
    Integer getLastVehiculeInformationId();

    void saveVehiculeInforamtion(VehiculeInformation vehiculeInformation);
    int saveConstatWithVehiculeInformationA(Constat constat,int id);
    int getSizeOfConstatByAccidentSite(String site);
}
