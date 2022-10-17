package com.example.demo.model;

import javax.persistence.*;


@Entity
@Table(name = "Appointment")
public class Appointment {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int appointment_id;
    private int doctor_id;
    private int patient_id;
    private String hospital_name;
    private int slot;
    private String city;
    private String date;

    public Appointment() {
    }

    public int getAppointment_id() {
        return appointment_id;
    }

    public void setAppointment_id(int appointment_id) {
        this.appointment_id = appointment_id;
    }

    public int getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(int doctor_id) {
        this.doctor_id = doctor_id;
    }

    

    public int getPatient_id() {
        return patient_id;
    }

    public void setPatient_id(int patient_id) {
        this.patient_id = patient_id;
    }

    public String getHospital_name() {
        return hospital_name;
    }

    public void setHospital_name(String hospital_name) {
        this.hospital_name = hospital_name;
    }

    public int getSlot() {
        return slot;
    }

    public void setSlot(int slot) {
        this.slot = slot;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Appointment(int appointment_id, int doctor_id,  int patient_id, String hospital_name, int slot, String city, String date) {
        this.appointment_id = appointment_id;
        this.doctor_id = doctor_id;
        
        this.patient_id = patient_id;
        this.hospital_name = hospital_name;
        this.slot = slot;
        this.city = city;
        this.date = date;
    }
}
