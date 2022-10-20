package com.example.demo.Controller;

import com.example.demo.Service.AppointmentService;
//import com.example.demo.model.Appointment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

//    @GetMapping("/all")
//    public List<Appointment> getAllAppointments() {
//        return appointmentService.viewAppointments();
//    }
//
//
//    @DeleteMapping("/cancel/{appId}")
//    public void deleteAppointment(@PathVariable("appId") int appId){
//        appointmentService.cancelAppointment(appId);
//    }
	
	@GetMapping("/getslotbydate/{date}/{doctor_id}")
	public List<Integer> getslotsbydate(@PathVariable("date") String date, @PathVariable("doctor_id") int doctor_id){
		return appointmentService.getslotsbydateforparticulardoctor(date, doctor_id);
	}

}
