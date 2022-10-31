import React,{useState,useEffect} from "react";

import signupimage from '../images/patient_signup.png'
import {Navigate, useNavigate } from 'react-router-dom';
import '../css/patientprofile.css'

// let myobj={};

const PatientProfile=()=>{
    const [myobj,setmyObj] = useState({});
    useEffect(() => {
        const axios = require('axios').default;
        const patient_id=localStorage.getItem('Pid');
            //console.log(specialization);
            axios.post(
                'http://localhost:9090/patient/getpatientprofiledetails/'+patient_id,
                )
          .then((res) => {
              console.log("Patient details received");
            //   myobj=res.data;
            setmyObj(res.data);
              console.log("Details bbbb",myobj);
              console.log("pppp",myobj.gender);
              
          })
          .catch((err) => {
              console.log(err);
          });
    },[])
      return (
         
      <div>

        {localStorage.getItem("Plogin")==='1' ?
      
        <div class="page-content page-container fill-window" id="page-content" style={{boxShadow:"10px 8px 5px 10px black !important"}}>
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img src={signupimage} class="img-radius" alt="User-Profile-Image"/>
                                                                </div>
                                                                <h4 class="f-w-600">{myobj.name}</h4>
                                                                <h4>{myobj.gender}, {myobj.age}</h4>
                                
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Personal Information</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Blood Group</p>
                                                                        <h6 class="text-muted f-w-400" style={{marginLeft:"20%"}}>{myobj.bloodGroup}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Mobile</p>
                                                                        <h6 class="text-muted f-w-400">{myobj.mobileNumber}</h6>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">City</p>
                                                                        <h6 class="text-muted f-w-400">{myobj.city}</h6>
                                                                    </div>
                                                              
                                                                </div>
                                                                {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Appointments</h6> */}
                                                                {/* <div class="row">
                                                                    <div class="col-sm-4">
                                                                        <p class="m-b-10 f-w-600">Total Count</p>
                                                                        <h6 class="text-muted f-w-400" style={{marginLeft:"20%"}}>10</h6>
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                        <p class="m-b-10 f-w-600">Past</p>
                                                                        <h6 class="text-muted f-w-400" style={{marginLeft:"20%"}}>7</h6>
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                        <p class="m-b-10 f-w-600">Upcoming</p>
                                                                        <h6 class="text-muted f-w-400" style={{marginLeft:"20%"}}>3</h6>
                                                                    </div>
                                                                </div> */}
                                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>:<Navigate replace to="/patient/login"></Navigate> 
        }
        </div>
      );
    
}
export default PatientProfile;

