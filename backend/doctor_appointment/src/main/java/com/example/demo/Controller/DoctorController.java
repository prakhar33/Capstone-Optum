package com.example.demo.Controller;

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Login;
import com.example.demo.Service.AppointmentService;
import com.example.demo.Service.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorservice;
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/signup")
    public Doctor RegisterDoctor(@RequestBody Doctor doctor)
    {
        return doctorservice.addDoctor(doctor);
    }

    @GetMapping("/getAll")
    public List<Doctor> getAllDoctor()
    {
        return doctorservice.getAllDoctors();
    }
    
    @PostMapping("/login")
	public String loginPatient(@RequestBody Login login) {
		return doctorservice.DoctorLogin(login);
	}
    
    @PostMapping("/getBySpecial/{specialization}")
    public List<Doctor> GetBySpecial(@PathVariable("specialization") String special){
    	return doctorservice.SearchBySpecial(special);
    }
    
    @PostMapping("/getByHosp/{hospt}")
    public List<Doctor> GetByHosp(@PathVariable("hospt") String hosp){
    	return doctorservice.SearchByHosp(hosp);
    }
    
    @PostMapping("/getCity")
    public String getCity(@RequestBody String name) {
    	return doctorservice.getCity(name);
    }


    @GetMapping({"/viewapps/{did}"})
    public List<Appointment> viewDAppointments(@PathVariable("did") int did){
        return this.appointmentService.viewDAppointments(did);
    }
    @DeleteMapping({"/delete/{did}"})
    public  void deleteDAppointments(@PathVariable("did") int did){
        this.appointmentService.deleteDAppointments(did);
        return;
    }
    @GetMapping("/getDocByID/{id}")
    public Doctor getByID(@PathVariable("id") int id){
        return doctorservice.getById(id);
    }

}
