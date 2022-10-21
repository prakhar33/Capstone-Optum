package com.example.demo.Service;

import com.example.demo.Repository.AppointmentRepository;
import com.example.demo.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

<<<<<<< HEAD
    public List<Appointment> viewHAppointments(String hname){
        return this.appointmentRepository.viewByHId(hname);
=======
    public List<String> viewHAppointments(int hid){
         return this.appointmentRepository.viewByHId(hid);
>>>>>>> parent of 416d8ad (added admin API)
    }


    public List<Object> viewPAppointments(int pid){
        return this.appointmentRepository.viewByPId(pid);
    }

    public List<Appointment> viewDAppointments(int did){
        return this.appointmentRepository.viewByDId(did);
    }

    public void deletePAppointments(int pid){
         this.appointmentRepository.deleteByPId(pid);
         return;
    }

    public void deleteDAppointments(int did){
        this.appointmentRepository.deleteByDId(did);
        return;
    }


    public void deleteHAppointments(long hid){
        this.appointmentRepository.deleteByHId(hid);
        return;
    }
    public Appointment addApps(Appointment app){
        return appointmentRepository.save(app);
    }
    public List<Integer> getslotsbydateforparticulardoctor(String date, int doctor_id)
    {
    	return appointmentRepository.getslotsbydateforparticulardoctor(date, doctor_id);
    }
    public void editApps(Appointment app) { appointmentRepository.editApp(app.getAppointment_id(), app.getDate(), app.getSlot());}

}
