package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.HospitalRepository;
import com.example.demo.model.Hospital;
import com.example.demo.model.Login;

import java.util.List;

@Service
public class HospitalService {
	
	@Autowired
	private HospitalRepository hospitalrepo;
	
	PasswordEncoder passwordencoder=new BCryptPasswordEncoder();
	
	public Hospital addHospital(Hospital hospital) {
		String Encrypted_pswd=passwordencoder.encode(hospital.getPassword());
		hospital.setPassword(Encrypted_pswd);
		return hospitalrepo.save(hospital);
	}
	
	public List<Hospital> getAllHospitals(){
		return hospitalrepo.findAll();	}
	
	public String HospitalLogin(Login login) {
		
		String user=login.getUsername();
		
		String pass=hospitalrepo.getByUsername(user);
		
		if(passwordencoder.matches(login.getPassword(), pass)) {
			return "Login Successful";
		}
		else {
			return "Login failed";
		}
	}

	public void removeHsptl(long hospital_id){
		hospitalrepo.deleteHsptlById(hospital_id);
	}
}
