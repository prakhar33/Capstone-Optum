package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.HospitalRepository;
import com.example.demo.model.Hospital;
import java.util.List;

@Service
public class HospitalService {
	
	@Autowired
	private HospitalRepository hospitalrepo;
	
	public Hospital addHospital(Hospital hospital) {
		return hospitalrepo.save(hospital);
	}
	
	public List<Hospital> getAllHospitals(){
		return hospitalrepo.findAll();	}
}
