package com.example.demo.Service;

import com.example.demo.Repository.AdminRepository;
import com.example.demo.model.Admin;
import com.example.demo.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    PasswordEncoder passwordencoder=new BCryptPasswordEncoder();

    @Autowired
    private AdminRepository adminRepository;

    public Admin addAdmin(Admin admin){
        String Encrypted_pswd = passwordencoder.encode(admin.getPassword());
        admin.setPassword(Encrypted_pswd);
        return adminRepository.save(admin);
    }

    public String adminlogin(Login login){
        String user=login.getUsername();
        String pass= adminRepository.getByUsername(user);
        if(passwordencoder.matches(login.getPassword(), pass)) {
            return "Login Successful";
        }
        else {
            return "Login failed";
        }
    }


}
