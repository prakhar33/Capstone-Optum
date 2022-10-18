package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Patient;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
	
	@Query("SELECT p.password from Patient p WHERE p.mobileNumber =:n")
	public String getByUsername(@Param("n") String name);
	
	@Modifying
	@Transactional
	@Query("DELETE from Patient WHERE name =:m")
	public int deleteByName(@Param("m") String name);
	
	
}
