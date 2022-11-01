import React,{useState} from "react";
import axios from "axios";
import adminimage from '../images/admin.png'
import {useNavigate } from 'react-router-dom';
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import swal from 'sweetalert';
const AdminLoginComponent=()=>{
      const [username , setusername] = useState('');
      const [password , setpassword] = useState('');

    const handleusername=(e)=> {
        setusername(e.target.value)
    }
    
    const handlepassword=(e)=> {
        setpassword(e.target.value)
    }
    const navigate=useNavigate();
    const handleSubmit=(e)=> {
        
        const axios = require('axios').default;
        axios.post('http://127.0.0.1:9090/admin/login', {
            username: username,
            password: password
      })
      .then((res) => {
        if(res.data!="Login failed"){
          localStorage.setItem("Adminlogin",1);
          localStorage.setItem("Adminid",res.data);
          swal({
            icon: "success",
            text: "You are Logged In successfully"
          });
          navigate("/admin/dashboard");
        }
        else{
            // alert("Incorrect Credentials! Please try to login again");
            swal("Oops!", "Incorrect Credentials!", "error");
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
    <img src={adminimage} style={{borderRadius:"50%",width:"20%"}}></img>
  </center>
  
  <br></br>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-pencil"></i> </div>
      <input type="text" class="form-control" id="mciRegistrationNumber" placeholder="Username" required minLength={10} maxLength={10} pattern="[1-9]{1}[0-9]{9}" value={username} onChange={(e)=>{handleusername(e)}} />
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
</center>
</form>
</div>
<div className="my-footer">
  <HomeFooter/>
</div>
</div>
</center>
      );
    
      }
export default AdminLoginComponent;

