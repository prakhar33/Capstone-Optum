package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Appointment;
import com.example.demo.model.Login;
import com.example.demo.model.Patient;
import com.example.demo.Service.AppointmentService;
//import com.example.demo.Service.DoctorService;
import com.example.demo.Service.PatientService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {
	
	
	@Autowired
	private PatientService patientservice;
	
//	@Autowired
//	private DoctorService doctorservice;
	
    @Autowired
    private AppointmentService appointmentService;
	
	@GetMapping("/getAll")
	public List<Patient> getAllPatients(){
		return patientservice.getAllpatients();
	}
	
	@PostMapping("/signup")
	public Patient addPatient(@RequestBody Patient patient) {
		return patientservice.addPatients(patient);
	}
	
	
	@PostMapping("/login")
	public String loginPatient(@RequestBody Login login) {
		return patientservice.PatientLogin(login);
	}
	@GetMapping({"/viewapps/{pid}"})
	public List<String> viewPAppointments(@PathVariable("pid") int pid){
	    return this.appointmentService.viewPAppointments(pid);
	}
	@PostMapping("/Book")
	public Appointment bookAppointment(@RequestBody Appointment app) {
		//int slot=app.getSlot();
		//int docid=app.getDoctor_id();
		//doctorservice.updateSlotDoc(docid, slot);
		return this.appointmentService.addApps(app);
	}

	@DeleteMapping("/delete/{pid}")
	public  void deletePAppointments(@PathVariable("pid") int pid){
	     this.appointmentService.deletePAppointments(pid);
	     return;
	}
}
