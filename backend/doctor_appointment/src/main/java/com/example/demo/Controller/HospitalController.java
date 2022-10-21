package com.example.demo.Controller;

import java.util.List;

import com.example.demo.Service.PatientService;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AppointmentService;
import com.example.demo.Service.DoctorService;
import com.example.demo.Service.HospitalService;
import com.example.demo.model.Hospital;
import com.example.demo.model.Login;

@CrossOrigin
@RestController
@RequestMapping("/hospital")
public class HospitalController {
	
	@Autowired
	private HospitalService hospitalservice;
	
	@Autowired
	private DoctorService doctorservice;
	
    @Autowired
    private AppointmentService appointmentService;

	
	@PostMapping("/signup")
	public Hospital addHospital(@RequestBody Hospital hospital) {
		return hospitalservice.addHospital(hospital);
	}
	
	@PostMapping("/login")
	public String loginHosp(@RequestBody Login login) {
		return hospitalservice.HospitalLogin(login);
	}
	
	@DeleteMapping("/deleteDoctor/{name}")
	public void deleteDoctor(@PathVariable("name") String name) {
		 doctorservice.removeDoctor(name);
	}
	
	@GetMapping({"/viewapps/{hname}"})
	public List<String> viewHAppointments(@PathVariable("hname") String hname){
	    return this.appointmentService.viewHAppointments(hname);
	}
	@DeleteMapping({"/delete/{hid}"})
	public  void deleteHAppointments(@PathVariable("hid") long hid){
	    this.appointmentService.deleteHAppointments(hid);
	    return;
	}
	
	@GetMapping("/getAll")
	public List<Hospital> getAllHosp(){
		return hospitalservice.getAllHospitals();
	}

	@GetMapping("/viewPatients/{hname}")
	public List<String> viewPatientunderHptl(@PathVariable("hname") String name){
		return appointmentService.viewHAppointments(name);
	}

	@GetMapping("/viewDocByHsptl/{name}")
	public List<Doctor> viewDocByHsptl(@PathVariable("name") String name){
		return doctorservice.SearchByHosp(name);
	}
	
}
