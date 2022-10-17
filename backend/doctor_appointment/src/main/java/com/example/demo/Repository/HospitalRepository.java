package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long>{
	
}
