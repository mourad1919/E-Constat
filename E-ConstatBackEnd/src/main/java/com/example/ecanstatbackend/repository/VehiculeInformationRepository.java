package com.example.ecanstatbackend.repository;

import com.example.ecanstatbackend.entity.User;
import com.example.ecanstatbackend.entity.VehiculeInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculeInformationRepository extends JpaRepository<VehiculeInformation,Integer> {
    @Query(value="SELECT `id` FROM `vehicule_information` ORDER BY id desc limit 1",nativeQuery = true)
    Integer getLastId();

}
