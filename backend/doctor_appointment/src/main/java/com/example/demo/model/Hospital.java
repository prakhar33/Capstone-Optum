package com.example.demo.model;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Hospital")
public class Hospital {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long hospital_id;
	private String hospital_name;
	private String city;
	private String password;
	
	public Hospital() {
		
	}
	public Hospital(String hospital_name, String city, String password) {
		super();
		this.hospital_name = hospital_name;
		this.city = city;
		this.password = password;
	}
	public long getHospital_id() {
		return hospital_id;
	}
	public void setHospital_id(long hospital_id) {
		this.hospital_id = hospital_id;
	}
	public String getHospital_name() {
		return hospital_name;
	}
	public void setHospital_name(String hospital_name) {
		this.hospital_name = hospital_name;
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
}
