package com.example.demo.Controller;

import java.util.List;

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
	
	@DeleteMapping("/deleteDoctor")
	public int deletePatient(@RequestBody String name) {
		return doctorservice.removeDoctor(name);
	}
	
	@GetMapping({"/viewapps/{hid}"})
	public List<String> viewHAppointments(@PathVariable("hid") int hid){
	    return this.appointmentService.viewHAppointments(hid);
	}
	@DeleteMapping({"/delete/{hid}"})
	public  void deleteHAppointments(@PathVariable("hid") long hid){
	    this.appointmentService.deleteHAppointments(hid);
	    return;
	}
	
	
}
