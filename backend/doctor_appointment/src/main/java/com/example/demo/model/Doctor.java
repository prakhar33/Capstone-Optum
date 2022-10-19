package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int doctor_id;
    private String mobileNumber;
    private String hospitalName;
    private int mci_registration_number;
    private String name;
    private String specialization;
    
    private int start_time;
    
    private int end_time;
    private String city;
	private String password;
	
	public int slot_1;
	public int slot_2;
	public int slot_3;
	public int slot_4;
	public int slot_5;
	public int slot_6;
	public int slot_7;
	public int slot_8;
	public int slot_9;
	public int slot_10;
	public int slot_11;
	public int slot_12;
	public int slot_13;
	public int slot_14;
	public int slot_15;
	public int slot_16;
	public int slot_17;
	public int slot_18;
	public int slot_19;
	public int slot_20;
	

    public Doctor() {
    }

    public Doctor(int doctor_id, String mobileNumber, String hospitalName, int mci_registration_number, String name, String specialization, int start_time, int end_time, String city, String password,int slot_1,
    		int slot_2,int slot_3,int slot_4,int slot_5,int slot_6,int slot_7,int slot_8,int slot_9,
    		int slot_10,int slot_11,int slot_12,int slot_13,int slot_14,int slot_15,int slot_16,int slot_17,
    		int slot_18,int slot_19,int slot_20) {
    	
        this.doctor_id = doctor_id;
        this.mobileNumber = mobileNumber;
        this.hospitalName = hospitalName;
        this.mci_registration_number = mci_registration_number;
        this.name = name;
        this.specialization = specialization;
        this.start_time = start_time;
        this.end_time = end_time;
        this.city = city;
        this.password = password;
        this.slot_1=slot_1;
        this.slot_2=slot_2;
        this.slot_3=slot_3;
        this.slot_4=slot_4;
        this.slot_5=slot_5;
        this.slot_6=slot_6;
        this.slot_7=slot_7;
        this.slot_8=slot_8;
        this.slot_9=slot_9;
        this.slot_10=slot_10;
        this.slot_11=slot_11;
        this.slot_12=slot_12;
        this.slot_13=slot_13;
        this.slot_14=slot_14;
        this.slot_15=slot_15;
        this.slot_16=slot_16;
        this.slot_17=slot_17;
        this.slot_18=slot_18;
        this.slot_19=slot_19;
        this.slot_20=slot_20;
        
    }

    public int getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(int doctor_id) {
        this.doctor_id = doctor_id;
    }


    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public int getMci_registration_number() {
        return mci_registration_number;
    }

    public void setMci_registration_number(int mci_registration_number) {
        this.mci_registration_number = mci_registration_number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public int getStart_time() {
        return start_time;
    }

    public void setStart_time(int start_time) {
        this.start_time = start_time;
    }

    public int getEnd_time() {
        return end_time;
    }

    public void setEnd_time(int end_time) {
        this.end_time = end_time;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getSlot_1() {
		return slot_1;
	}

	public void setSlot_1(int slot_1) {
		this.slot_1 = slot_1;
	}
	

}
