import logo from './logo.svg';
import React,{useState,useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import ListDoctorComponent from './components/ListDoctorComponent';
import DoctorSignUpComponent from './components/DoctorSignUpComponent';
import DoctorLoginComponent from './components/DoctorLoginComponent';
import PatientSignUpComponent from './components/PatientSignUpComponent';
import HospitalSignUpComponent from './components/HospitalSignUpComponent';
import AdminLoginComponent from './components/AdminLoginComponent';
import PatientLoginComponent from './components/PatientLoginComponent';
import BookAppointmentComponent from './components/BookAppointmentComponent';

const App=()=> {

  const handleLogin=(pid)=>{
    localStorage.setItem('Login','1');
    localStorage.setItem('patient_id',pid);
  }


  
  return (
    <div>
      <Router>
        <div className='container'>
              <div className="container">
                
                <Routes>
                    
                    <Route path="/doctor/listAllDoctors" element={<ListDoctorComponent/>}> </Route>
                    
                    <Route path="/doctor/signup" element={<DoctorSignUpComponent/>}> </Route>
                    <Route path="/doctor/login" element={<DoctorLoginComponent handle={handleLogin}/>}> </Route>
                    <Route path="/patient/signup" element={<PatientSignUpComponent/>}> </Route>
                    <Route path="/hospital/signup" element={<HospitalSignUpComponent/>}> </Route>
                    <Route path="/admin/login" element={<AdminLoginComponent/>}> </Route>
                    <Route path="/patient/login" element={<PatientLoginComponent/>}> </Route>
                    <Route path="/patient/bookAppointment" element={<BookAppointmentComponent/>}> </Route>
                </Routes>
              </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
