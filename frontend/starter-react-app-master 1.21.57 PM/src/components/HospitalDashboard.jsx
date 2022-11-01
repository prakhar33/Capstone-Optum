import React,{useState,useEffect} from "react";
import {Navigate } from 'react-router-dom';
import signupimage from '../images/hospital_signup.png'
import '../css/dashboard.css'
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/dropdown'
const HospitalDashboard=()=>{
   function handleLogOut(){
      console.log("in Hospital logout");
      localStorage.removeItem("Hlogin");
      localStorage.removeItem("Hid");
      window.location = "http://localhost:3000/";
   }

      return (
<div>
{localStorage.getItem("Hlogin")==='1' ?

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
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/hospital/profile">
              <i class="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
      
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/hospital/viewappointments">
              <i class="fa fa-eye"></i><em>View Appointments</em>
           </a>
        </li>
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/hospital/adddoctor">
              <i class="fa fa-plus"></i><em>Add Doctor</em>
           </a>
        </li>
        <li>
           <a target="myframe" class="s-sidebar__nav-link" href="http://localhost:3000/hospital/managedoctors">
              <i class="fa fa-cog"></i><em>Manage Doctors</em>
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
  <iframe src="http://localhost:3000/hospital/profile" name="myframe" width={"100%"} height={"100%"} style={{backgroundColor:"white",marginBottom: "70px"}}>
  </iframe>
  <div className="my-footer">
  <Footer/>
</div>
</main>
</div>:<Navigate replace to="/hospital/login"></Navigate>
}
</div>
);
}
export default HospitalDashboard;





