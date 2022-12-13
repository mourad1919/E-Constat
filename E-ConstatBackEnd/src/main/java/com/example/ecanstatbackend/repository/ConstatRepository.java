package com.example.ecanstatbackend.repository;

import com.example.ecanstatbackend.entity.Constat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConstatRepository extends JpaRepository<Constat,Integer> {
    List<Constat> findConstatByAccidentDateBetween(LocalDateTime start,LocalDateTime end);
    int countConstatByAccidentSite(String site);
}
