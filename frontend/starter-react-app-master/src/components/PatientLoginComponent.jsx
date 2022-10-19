import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/patient_signup.png'
import {useNavigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
const PatientLoginComponent=()=>{
      const [mobileNumber , setmcimobileNumber] = useState('');
      const [password , setpassword] = useState('');

    const handleMobileNumber=(e)=> {
        setmcimobileNumber(e.target.value)
    }
    
    const handlepassword=(e)=> {
        setpassword(e.target.value)
    }
    
    const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        
        const axios = require('axios').default;
        axios.post('http://localhost:9090/patient/login', {
            username: mobileNumber,
            password: password
      })
      .then((res) => {
          console.log(res.data);
          if(res.data==="Login Successful"){
            localStorage.setItem("Plogin",1);
            localStorage.setItem("Pid",mobileNumber);
            navigate("/patient/bookByHosp");
          }
      })
      .catch((err) => {
          console.log(err);
      });
      e.preventDefault();
        
    }

      return (
<center>
<div className="fill-window bg-login">
<HomeHeader />
<div id="formdiv">
<form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center my-login-form" onSubmit={(e)=>{handleSubmit(e)}}>
  <center>
    <div>
     <h1 style={{color:"white"}}>Login</h1>
    </div>
    <img src={signupimage} style={{borderRadius:"50%",width:"20%"}}></img>
  </center>
  
  <br></br>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Registered Mobile Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-pencil"></i> </div>
      <input type="text" class="form-control" id="mciRegistrationNumber" placeholder="Registered Mobile Number" required value={mobileNumber} onChange={(e)=>{handleMobileNumber(e)}} />
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Password</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-key"></i> </div>
      <input type="password" class="form-control" id="password" placeholder="Password" required maxLength={8} value={password} onChange={(e)=>{handlepassword(e)}} />
    </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Login</button>
  </div>
<center>
<div>
        <a color="primary" className="px-4" style={{textDecoration: "none",cursor:"pointer"}}
                onClick={()=>navigate("/patient/signup")}
                  >
                  New User? Register
                </a>
</div>
</center>
</form>
</div>
<div className="my-footer">
  <Footer/>
</div>
</div>
</center>
      );
    
      }
export default PatientLoginComponent;

