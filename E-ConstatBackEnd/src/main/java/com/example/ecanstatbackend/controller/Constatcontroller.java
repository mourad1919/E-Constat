package com.example.ecanstatbackend.controller;

import com.example.ecanstatbackend.entity.Constat;
import com.example.ecanstatbackend.entity.VehiculeInformation;
import com.example.ecanstatbackend.service.ConstatService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.bcel.Const;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/constat")
public class Constatcontroller {
    private final ConstatService constatService;
    @PostMapping("/saveconstat")
    public int saveConstat(@RequestBody Constat constat){
        return constatService.saveConstat(constat);
    }
    @PutMapping("/modifyconstat")
    public void modifyConstat(@RequestBody Constat constat){
        constatService.modifyConstat(constat);
    }
    @GetMapping("/getconstat/{id}")
    public Constat getConstat(@PathVariable int id){
        return constatService.getConstat(id);
    }
    @GetMapping("/getallconstats")
    public List<Constat> getAllConstats(){
        return constatService.getAllConstats();
    }
    @DeleteMapping("/deleteconstat/{id}")
    public void deleteConstat(@PathVariable int id){
        constatService.deleteConstat(id);
    }
    @GetMapping("/getLastIdVehiculeInformation")
    public Integer getLastIdVehiculeInformation(){
        return constatService.getLastVehiculeInformationId();
    }
    @PostMapping("/saveVehiculeInforamtion")
    public void saveVehiculeInforamtion(@RequestBody VehiculeInformation vehiculeInformation){
        constatService.saveVehiculeInforamtion(vehiculeInformation);
    }
    @PostMapping("/saveConstatWithVehiculeInformationA/{id}")
    public void saveConstatWithVehiculeInformationA(@RequestBody Constat constat,@PathVariable int id){
        constatService.saveConstatWithVehiculeInformationA(constat, id);
    }
    @GetMapping("/getSizeOfConstatByAccidentSite/{site}")
    public int getSizeOfConstatByAccidentSite(@PathVariable String site){
        return constatService.getSizeOfConstatByAccidentSite(site);
    }
}
