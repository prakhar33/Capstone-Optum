package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Hospital;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long>{

	@Modifying
	@Transactional
	@Query("Delete from Hospital WHERE hospital_id=:m")
	void deleteHsptlById(@Param("m") long hospital_id);
	
	@Query("SELECT d.password from Hospital d WHERE d.mobileNumber =:n")
	String getByUsername(@Param("n") String name);
}
