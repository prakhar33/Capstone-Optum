import React,{useState,useEffect} from "react";
import {Navigate } from 'react-router-dom';
import signupimage from '../images/patient_signup.png'
import '../css/dashboard.css'
import HomeFooter from "./HomeFooter";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/dropdown'
const PatientDashboard=()=>{
   function handleLogOut(){
      console.log("in Patient logout");
      localStorage.removeItem("Plogin");
      localStorage.removeItem("Pid");
      window.location = "http://localhost:3000/";
   }

      return (
<div>
{localStorage.getItem("Plogin")==='1' ?

<div class="s-layout">
{/* <!-- Sidebar --> */}
<div class="s-layout__sidebar">
  <a class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </a>
  
  <nav class="s-sidebar__nav">
     
     <ul>
        <li class="myli">
           <center><img src={signupimage} widhth="100px" height="100px" style={{borderRadius:"50%"}}></img></center>
        </li>
        <hr></hr>
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/patient/profile">
              <i class="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
        {/* <li> */}
            {/* <div class="dropdown"> */}
                  <a class="btn btn-secondary dropdown-toggle my-dropdown " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-edit" style={{margin:"0px 24px 0px 12px"}}></i><em>Book Appointment</em>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li><a target="myframe" class="dropdown-item" href="http://localhost:3000/patient/bookappointment">Book by Specialization</a></li>
                     <li><a target="myframe" class="dropdown-item" href="http://localhost:3000/patient/bookbyhospital">Book by Hospital Name</a></li>
                  </ul>
            {/* </div> */}
            

           {/* <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/patient/bookappointment">
             <i class="fa fa-edit"></i><em>Book Appointment</em>
           </a> */}
        {/* </li> */}
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/patient/viewappointments">
              <i class="fa fa-eye"></i><em>View Appointments</em>
           </a>
        </li>
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/patient/manageappointments">
              <i class="fa fa-cog"></i><em>Manage Appointments</em>
           </a>
        </li>
        <li>
           <a href="#" onClick={() => handleLogOut( )} class="s-sidebar__nav-link" >
              <i class="fa fa-sign-out"></i><em>Logout</em>
           </a>
        </li>
        <hr></hr>
     </ul>
  </nav>
</div>

{/* <!-- Content --> */}
<main class="s-layout__content" >
  {/* <h1>Full View, Please!</h1> */}
  <iframe src="http://localhost:3000/patient/profile" name="myframe" width={"100%"} height={"100%"} style={{backgroundColor:"white",marginBottom: "70px"}}>
  </iframe>
  <div className="my-footer">
  <HomeFooter/>
</div>
</main>
</div>:<Navigate replace to="/patient/login"></Navigate>
}
</div>
);
}
export default PatientDashboard;





