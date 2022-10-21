package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.PatientRepository;
import com.example.demo.model.Login;
import com.example.demo.model.Patient;

import java.util.List;

@Service
public class PatientService {
	
	@Autowired
	private PatientRepository patientrepo;
	
	PasswordEncoder passwordencoder=new BCryptPasswordEncoder();
	
	public List<Patient> getAllpatients() {
		return patientrepo.findAll();
	}
	
	public Patient addPatients(Patient patient) {
		String Encrypted_pswd=passwordencoder.encode(patient.getPassword());
		patient.setPassword(Encrypted_pswd);
		return patientrepo.save(patient);
	}
	
	public String PatientLogin(Login login) {
		
		String user=login.getUsername();
		
		String pass=patientrepo.getByUsername(user);
		
		if(passwordencoder.matches(login.getPassword(), pass)) {
			return "Login Successful";
		}
		else {
			return "Login failed";
		}
	}
	
	public int removePatient(String name) {
		return patientrepo.deleteByName(name);
	}
}
