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

    public List<Object> viewHAppointments(String hname){
         return this.appointmentRepository.viewByHId(hname);
    }


    public List<Object> viewPAppointments(int pid){
        return this.appointmentRepository.viewByPId(pid);
    }

    public List<Object> viewDAppointments(int did){
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

    public List<Appointment> getAppsByDateforDoctor(int docId){
        return appointmentRepository.getAppsByDateforDoctor(docId);
    }

    public void deletePAppts(int appId){
        appointmentRepository.deletePAppts(appId);
    }

}
