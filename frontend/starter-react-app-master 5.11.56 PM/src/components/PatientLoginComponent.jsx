import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/patient.png'
import {useNavigate } from 'react-router-dom';
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
        console.log(mobileNumber+password);
        const axios = require('axios').default;
        axios.post('http://localhost:8080/patient/login', {
            username: mobileNumber,
            password: password
      })
      .then((res) => {
          console.log(res.data);
          localStorage.setItem("patientId",res.data);
          navigate("/patient/apptlist");

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
      );
    
      }
export default PatientLoginComponent;

