import React,{useState,useEffect} from "react";
import axios from "axios";
import signupimage from '../images/hospital_signup.png'
import {useNavigate } from 'react-router-dom';
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
const HospitalLoginComponent=(props)=>{
      const [mciRegistrationNumber , setmciRegistrationNumber] = useState('');
      const [password , setpassword] = useState('');
  
    const handlemciRegistrationNumber=(e)=> {
        setmciRegistrationNumber(e.target.value)
    }
    
    const handlepassword=(e)=> {
        setpassword(e.target.value)
    }
    
    const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        const axios = require('axios').default;
        axios.post('http://127.0.0.1:9090/hospital/login', {
        username: mciRegistrationNumber,
        password: password
      })
      .then((res) => {
        if(res.data==="Login Successful"){
                  
          console.log(res.data);
          
          
        }
        else{
            console.log("NOO!!");

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
    <label class="visually-hidden" for="inlineFormInputGroupUsername">MCI Registration Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-pencil"></i> </div>
      <input type="text" class="form-control" id="mciRegistrationNumber" placeholder="Registered Mobile Number" required value={mciRegistrationNumber} onChange={(e)=>{handlemciRegistrationNumber(e)}} />
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
                onClick={()=>navigate("/doctor/signup")}
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
export default HospitalLoginComponent;