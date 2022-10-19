package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long>{
	
	
	@Query("SELECT d.password from Hospital d WHERE d.mobileNumber =:n")
	public String getByUsername(@Param("n") String name);
}
