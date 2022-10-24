package com.example.demo.Repository;

import com.example.demo.model.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer > {



    @Query(
            value = "SELECT a.appointment_id, a.patient_id, a.doctor_id, d.name, a.slot, a.city, a.date  FROM Appointment a JOIN Doctor d ON a.doctor_id = d.doctor_id WHERE a.hospital_name = :m" ,
            nativeQuery = true
    )
    List<Object> viewByHId(@Param("m") String name);

    @Query(
            value = "SELECT a.appointment_id,  a.hospital_name, a.doctor_id, d.name, a.slot, a.city, a.date FROM Appointment a JOIN Doctor d ON a.doctor_id = d.doctor_id WHERE a.patient_id = :m",
            nativeQuery = true
    )
    List<Object> viewByPId(@Param("m") int pid);

    @Query(
            value = "SELECT a.appointment_id, a.patient_id, a.slot, a.city, a.date FROM Appointment a WHERE a.doctor_id = :m",
            nativeQuery = true
    )
    List<Object> viewByDId(@Param("m") int did);

    @Modifying
    @Transactional
    @Query("DELETE from Appointment WHERE appointment_id =:m")
    void deleteById(@Param("m") int appId);

    @Modifying
    @Transactional
    @Query("DELETE from Appointment WHERE appointment_id =:m")
    void deleteByPId(@Param("m") int pid);

    @Modifying
    @Transactional
    @Query("DELETE from Appointment WHERE doctor_id =:m")
    void deleteByDId(@Param("m") int did);


    @Modifying
    @Transactional
    @Query("DELETE from Appointment WHERE hospital_id =:m")
    void deleteByHId(@Param("m") long hid);
    
    @Modifying
    @Transactional
    @Query("SELECT slot from Appointment where date=:d and doctor_id=:d_id")
    List<Integer> getslotsbydateforparticulardoctor(@Param("d") String date, @Param("d_id") int doctor_id);

    @Modifying
    @Transactional
    @Query("UPDATE Appointment SET date=:date, slot=:slot WHERE appointment_id =:apptId")
    void editApp(@Param("apptId") int pid, @Param("date") String date, @Param("slot") int slot);


}
