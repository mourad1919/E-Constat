package com.example.ecanstatbackend.repository;

import com.example.ecanstatbackend.entity.InsuredInforamation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuredInforamationRepository extends JpaRepository<InsuredInforamation,Integer> {
}
