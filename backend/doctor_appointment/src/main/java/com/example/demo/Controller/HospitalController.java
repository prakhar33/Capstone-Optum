package com.example.demo.Controller;

import java.util.List;

<<<<<<< HEAD
import com.example.demo.Service.PatientService;
import com.example.demo.model.*;
=======
>>>>>>> parent of 416d8ad (added admin API)
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
	
	@DeleteMapping("/deleteDoctor")
	public int deletePatient(@RequestBody String name) {
		return doctorservice.removeDoctor(name);
	}
	
<<<<<<< HEAD
	@GetMapping({"/viewapps/{hname}"})
	public List<Appointment> viewHAppointments(@PathVariable("hname") String hname){
	    return this.appointmentService.viewHAppointments(hname);
=======
	@GetMapping({"/viewapps/{hid}"})
	public List<String> viewHAppointments(@PathVariable("hid") int hid){
	    return this.appointmentService.viewHAppointments(hid);
>>>>>>> parent of 416d8ad (added admin API)
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
<<<<<<< HEAD

	@GetMapping("/viewPatients/{hname}")
	public List<Appointment> viewPatientunderHptl(@PathVariable("hname") String name){
		return appointmentService.viewHAppointments(name);
	}

	@GetMapping("/viewDocByHsptl/{name}")
	public List<Doctor> viewDocByHsptl(@PathVariable("name") String name){
		return doctorservice.SearchByHosp(name);
	}
=======
	
>>>>>>> parent of 416d8ad (added admin API)
	
}
