package com.example.demo.Controller;

import com.example.demo.Service.AdminService;
import com.example.demo.Service.DoctorService;
import com.example.demo.Service.HospitalService;
import com.example.demo.model.Admin;
import com.example.demo.model.Doctor;
import com.example.demo.model.Hospital;
import com.example.demo.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private HospitalService hospitalService;
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/signup")
    public Admin RegisterAdmin(@RequestBody Admin admin)
    {
        return adminService.addAdmin(admin);
    }

    @PostMapping("/login")
    public String Adminlogin(@RequestBody Login login){
        return adminService.adminlogin(login);
    }

    @DeleteMapping("/removeHsptl/{hospital_id}")
    public void removeHsptl(@PathVariable("hospital_id") long hospital_id){
        hospitalService.removeHsptl(hospital_id);
    }

    @DeleteMapping("/removeDoc/{doctor_name}")
    public void removeDoc(@PathVariable("doctor_name") String doctor_name){
        doctorService.removeDoctor(doctor_name);
    }

    @GetMapping("/viewHsptl")
    public List<Hospital> getAllHsptl(){
        return hospitalService.getAllHospitals();
    }

    @GetMapping("/viewDoctors")
    public List<Doctor> getAllDocs(){
        return doctorService.getAllDoctors();
    }


}
