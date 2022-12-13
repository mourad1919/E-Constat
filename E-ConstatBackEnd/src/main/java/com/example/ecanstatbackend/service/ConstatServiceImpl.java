package com.example.ecanstatbackend.service;

import com.example.ecanstatbackend.entity.Constat;
import com.example.ecanstatbackend.entity.VehiculeInformation;
import com.example.ecanstatbackend.repository.ConstatRepository;
import com.example.ecanstatbackend.repository.VehiculeInformationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConstatServiceImpl implements ConstatService{
    private final ConstatRepository constatRepository;
    private final VehiculeInformationRepository vehiculeInformationRepository;
    @Override
    public int saveConstat(Constat c) {
        constatRepository.save(c);
        constatRepository.flush();
        return c.getId();
    }

    @Override
    public void modifyConstat(Constat c) {
        constatRepository.save(c);
    }

    @Override
    public Constat getConstat(int id) {
        return constatRepository.findById(id).orElse(null);
    }

    @Override
    public List<Constat> getAllConstats() {
        return constatRepository.findAll();
    }

    @Override
    public void deleteConstat(int id) {
        Constat c=constatRepository.findById(id).orElse(null);
        vehiculeInformationRepository.deleteById(c.getVehiculeInformationA().getId());
        vehiculeInformationRepository.deleteById(c.getVehiculeInformationB().getId());
        c.setVehiculeInformationA(null);
        c.setVehiculeInformationB(null);
        constatRepository.save(c);
        constatRepository.deleteById(id);
    }

    @Override
    public Integer getLastVehiculeInformationId() {

        if(vehiculeInformationRepository.getLastId()==null){
            return 0;
        }
        else{
            return vehiculeInformationRepository.getLastId();
        }
    }

    @Override
    public void saveVehiculeInforamtion(VehiculeInformation vehiculeInformation) {
        vehiculeInformationRepository.save(vehiculeInformation);
    }

    @Override
    public void saveConstatWithVehiculeInformationA(Constat constat, int id) {
        VehiculeInformation vehiculeInformationA=vehiculeInformationRepository.findById(id).orElse(null);
        constat.setVehiculeInformationA(vehiculeInformationA);
        System.out.println(vehiculeInformationA);
        constatRepository.save(constat);
    }

    @Override
    public int getSizeOfConstatByAccidentSite(String site) {
        return constatRepository.countConstatByAccidentSite(site);
    }

}
