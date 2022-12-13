package com.example.ecanstatbackend.repository;

import com.example.ecanstatbackend.entity.User;
import com.example.ecanstatbackend.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule,Integer> {
}
