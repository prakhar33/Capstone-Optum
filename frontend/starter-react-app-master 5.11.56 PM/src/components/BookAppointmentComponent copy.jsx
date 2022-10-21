import React,{useState} from "react";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import AdminLoginComponent from "./AdminLoginComponent";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
//import ListDoctorComponent from "./ListDoctorComponent";
const BookAppointmentComponent=()=>{
      const [specialization , setspecialization] = useState('');
      const [fetcheddoctors , setfetcheddoctors] = useState([]);
    const handleSpecialization=(e)=> {
        setspecialization(e.target.value)
    }
    var config={
        headers:{
            'Content-Length':50,
            'Content-Type':'text/plain'
        }
    };
    
    // const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        const axios = require('axios').default;
        //console.log(specialization);
        axios.post(
            'http://localhost:8080/doctor/getBySpecial/'+specialization, )
      .then((res) => {
          //console.log("hello");
          setfetcheddoctors(res.data);
          //console.log(fetcheddoctors[0]);
      })
      .catch((err) => {
          console.log(err);
      });
      e.preventDefault();
    }
    
      return (
    <div id="formdiv">
        <form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center" style={{width:"40%",marginTop: "100px",backgroundColor:"black",borderRadius:"20px 0px 20px 0px", boxShadow:"8px 12px 10px 5px grey",padding:"8px"}}
        onSubmit={(e)=>{handleSubmit(e)}}>

        <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">Specialization</label>
            <select class="form-select" id="inlineFormSelectPref" required value={specialization} onChange={(e)=>{handleSpecialization(e)}}>
            <option value="" selected disabled>Select Specialization of a doctor you want to visit</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Paediatrician">Paediatrician</option>
            <option value="Neurosurgeon">Neurosurgeon</option>
            <option value="Gynecologist">Gynecologist</option>
            </select>
        </div>
        <div class="col-12">
        <button type="submit" class="btn btn-primary">Get Doctors with selected Specialization</button>
        </div>
        <center><h2>Doctors List with Selected Specialization</h2></center>
                <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Hospital Name</th>
                        <th>City</th>
                        <th>Mobile Number</th>
                        <th>Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetcheddoctors.map((doctor) => {
                            return(
                            <tr key={doctor.doctor_id}>
                                <td>{doctor.doctor_id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.hospitalName}</td>
                                <td>{doctor.city}</td>
                                <td>{doctor.mobileNumber}</td>
                                <td><center><button onclick="">Book</button></center></td>
                            </tr>
                        )}) 
                    }
                </tbody>
                </table>
        </form>
               
                {/* <ListDoctorComponent fetcheddoctors={fetcheddoctors} /> */}
                
            </div>

      );
    
      }
export default BookAppointmentComponent;

