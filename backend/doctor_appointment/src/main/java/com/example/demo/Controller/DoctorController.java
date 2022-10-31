package com.example.demo.Controller;

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Login;
import com.example.demo.Service.AppointmentService;
import com.example.demo.Service.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Calendar;
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
    public List<Object> viewDAppointments(@PathVariable("did") int did){
        return this.appointmentService.viewDAppointments(did);
    }
    @DeleteMapping({"/delete/{did}"})
    public  void deleteDAppointments(@PathVariable("did") int did){
        this.appointmentService.deleteDAppointments(did);
        return;
    }
    @CrossOrigin
    @GetMapping({"/docByID/{did}"})
    public Doctor getDocById(@PathVariable("did") int did){
        return this.doctorservice.getById(did);
    }

    @CrossOrigin
    @PostMapping("/changeAvailability/{doctor_id}/{startTime}/{endTime}")
    public void changeAvailability(@PathVariable("doctor_id") int docId, @PathVariable("startTime") int startTime, @PathVariable("endTime") int endTime){
        Doctor d = doctorservice.changeAvailability(docId,startTime,endTime);
        String timeStamp = new SimpleDateFormat("dd-MM-YYYY").format(Calendar.getInstance().getTime());
        List<Appointment> avail = appointmentService.getAppsByDateforDoctor(docId);
        for(int i=0; i<avail.size();i++){
            if((avail.get(i).getDate()).compareTo(timeStamp) > 0){
               if(avail.get(i).getSlot()==1){
                   if(d.getSlot_1()==0)
                       appointmentService.deletePAppts(avail.get(i).getAppointment_id());
               }
                if(avail.get(i).getSlot()==2){
                    if(d.getSlot_2()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==3){
                    if(d.getSlot_3()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==4){
                    if(d.getSlot_4()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==5){
                    if(d.getSlot_5()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==6){
                    if(d.getSlot_6()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==7){
                    if(d.getSlot_7()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==8){
                    if(d.getSlot_8()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==9){
                    if(d.getSlot_9()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==10){
                    if(d.getSlot_10()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==11){
                    if(d.getSlot_11()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==12){
                    if(d.getSlot_12()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==13){
                    if(d.getSlot_13()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==14){
                    if(d.getSlot_14()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==15){
                    if(d.getSlot_15()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==16){
                    if(d.getSlot_16()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==17){
                    if(d.getSlot_17()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==18){
                    if(d.getSlot_18()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==19){
                    if(d.getSlot_19()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }
                if(avail.get(i).getSlot()==20){
                    if(d.getSlot_20()==0)
                        appointmentService.deletePAppts(avail.get(i).getAppointment_id());
                }

            }
        }
    }
}
