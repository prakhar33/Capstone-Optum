import React,{useState,useEffect} from "react";
import {Navigate } from 'react-router-dom';
import signupimage from '../images/doctor_signup.png'
import '../css/dashboard.css'
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/dropdown'
const DoctorDashboard=()=>{
   function handleLogOut(){
      console.log("in Doctor logout");
      localStorage.removeItem("Dlogin");
      localStorage.removeItem("Did");
      window.location = "http://localhost:3000/";
   }

      return (
<div>
{localStorage.getItem("Dlogin")==='1' ?

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
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/doctor/profile">
              <i class="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
      
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/doctor/viewappointments">
              <i class="fa fa-eye"></i><em>View Appointments</em>
           </a>
        </li>
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/doctor/manageappointments">
              <i class="fa fa-cog"></i><em>Change Availability</em>
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
  <iframe src="http://localhost:3000/doctor/profile" name="myframe" width={"100%"} height={"100%"} style={{backgroundColor:"white",marginBottom: "70px"}}>
  </iframe>
  <div className="my-footer">
  <Footer/>
</div>
</main>
</div>:<Navigate replace to="/doctor/login"></Navigate>
}
</div>
);
}
export default DoctorDashboard;





