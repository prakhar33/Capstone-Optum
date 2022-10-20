package com.example.demo.Repository;

import com.example.demo.model.Doctor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

	@Query("SELECT d.password from Doctor d WHERE d.mobileNumber =:n")
	public String getByUsername(@Param("n") String name);
	
	@Modifying
	@Transactional
	@Query("DELETE from Doctor WHERE name =:m")
	public void deleteByName(@Param("m") String name);
	

	@Query(value="SELECT * FROM Doctor  WHERE specialization =:m",nativeQuery=true)
	public List<Doctor> searchBySpecial(@Param("m") String special);
	
	@Query(value="SELECT * FROM Doctor  WHERE hospital_name =:m",nativeQuery=true)
	public List<Doctor> searchByHosp(@Param("m") String hosp);
	
	@Query(value="SELECT d.name,h.city FROM Doctor d, Hospital h WHERE d.hospitalName=h.hospital_name AND d.name= :m",nativeQuery=true)
	public String getCity(@Param("m") String name);
	
	
//	@Modifying
//	@Transactional
//	@Query(value="UPDATE Doctor SET :b=2 WHERE doctor_id=:a ",nativeQuery=true)
//	public void editDocSlot(@Param("a") int docId, @Param("b")String slotname);
	
	
	@Query("SELECT d FROM Doctor d where d.doctor_id= :a")
	public Doctor getByDocid(@Param("a") int docId);
//	
}
