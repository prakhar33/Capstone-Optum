package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.DoctorRepository;
import com.example.demo.model.Doctor;
import com.example.demo.model.Login;

import java.util.List;

@Service
public class DoctorService {
	
	PasswordEncoder passwordencoder=new BCryptPasswordEncoder();
	
	@Autowired
	private DoctorRepository doctorrepo;
	
	public Doctor addDoctor(Doctor doctor) {
		String Encrypted_pswd=passwordencoder.encode(doctor.getPassword());
		doctor.setPassword(Encrypted_pswd);
		int a=doctor.getStart_time();
		int b=doctor.getEnd_time();
		for(int i=a;i<b;i++) {
			if(i==1) {
				doctor.slot_1=1;
			}
			if(i==2) {
				doctor.slot_2=1;
			}
			if(i==3) {
				doctor.slot_3=1;
			}
			if(i==4) {
				doctor.slot_4=1;
			}
			if(i==5) {
				doctor.slot_5=1;
			}
			if(i==6) {
				doctor.slot_6=1;
			}
			if(i==7) {
				doctor.slot_7=1;
			}
			if(i==8) {
				doctor.slot_8=1;
			}
			if(i==9) {
				doctor.slot_9=1;
			}
			if(i==10) {
				doctor.slot_10=1;
			}
			if(i==11) {
				doctor.slot_11=1;
			}
			if(i==12) {
				doctor.slot_12=1;
			}
			if(i==13) {
				doctor.slot_13=1;
			}
			if(i==14) {
				doctor.slot_14=1;
			}
			if(i==15) {
				doctor.slot_15=1;
			}
			if(i==16) {
				doctor.slot_16=1;
			}
			if(i==17) {
				doctor.slot_17=1;
			}
			if(i==18) {
				doctor.slot_18=1;
			}
			if(i==19) {
				doctor.slot_19=1;
			}
			if(i==20) {
				doctor.slot_20=1;
			}
			
		}
		return doctorrepo.save(doctor);
	}
	
	public List<Doctor> getAllDoctors(){
		return doctorrepo.findAll();
	}
	
	public String DoctorLogin(Login login) {
		
		String user=login.getUsername();
		
		String pass=doctorrepo.getByUsername(user);
		
		if(passwordencoder.matches(login.getPassword(), pass)) {
			return "Login Successful";
		}
		else {
			return "Login failed";
		}
	}
	
	public int removeDoctor(String name) {
		return doctorrepo.deleteByName(name);
	}
	
	public List<Doctor> SearchBySpecial(String special){
		return doctorrepo.searchBySpecial(special);
	}
	
	public List<Doctor> SearchByHosp(String hosp){
		return doctorrepo.searchByHosp(hosp);
	}
	
	public String getCity(String name) {
		return doctorrepo.getCity(name);
	}
	
//	public void updateSlotDoc(int docid,int i) {
//		
//		Doctor doctor=doctorrepo.getByDocid(docid);
//		String slotname="";
//		if(i==1) {
//			doctor.slot_1=2;
//		}
//		if(i==2) {
//			doctor.slot_2=2;
//		}
//		if(i==3) {
//			doctor.slot_3=2;
//		}
//		if(i==4) {
//			doctor.slot_4=2;
//		}
//		if(i==5) {
//			doctor.slot_5=2;
//		}
//		if(i==6) {
//			doctor.slot_6=2;
//		}
//		if(i==7) {
//			doctor.slot_7=2;
//		}
//		if(i==8) {
//			doctor.slot_8=2;
//		}
//		if(i==9) {
//			doctor.slot_9=2;
//		}
//		if(i==10) {
//			doctor.slot_10=2;
//		}
//		if(i==11) {
//			doctor.slot_11=2;
//		}
//		if(i==12) {
//			doctor.slot_12=2;
//		}
//		if(i==13) {
//			doctor.slot_13=2;
//		}
//		if(i==14) {
//			doctor.slot_14=2;
//		}
//		if(i==15) {
//			doctor.slot_15=2;
//		}
//		if(i==16) {
//			doctor.slot_16=2;
//		}
//		if(i==17) {
//			doctor.slot_17=2;
//		}
//		if(i==18) {
//			doctor.slot_18=2;
//		}
//		if(i==19) {
//			doctor.slot_19=2;
//		}
//		if(i==20) {
//			doctor.slot_20=2;
//		}
//		doctorrepo.save(doctor);
//	}
	
	
}
