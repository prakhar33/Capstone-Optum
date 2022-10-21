import React,{useState} from "react";
import axios from "axios";
import adminimage from '../images/admin.png'
import {useNavigate } from 'react-router-dom';
const AdminLoginComponent=()=>{
      const [username , setusername] = useState('');
      const [password , setpassword] = useState('');

    const handleusername=(e)=> {
        setusername(e.target.value)
    }
    
    const handlepassword=(e)=> {
        setpassword(e.target.value)
    }
    
    const handleSubmit=(e)=> {
        
        const axios = require('axios').default;
        axios.post('http://127.0.0.1:8080/admin/login', {
            username: username,
            password: password
      })
      .then((res) => {
          console.log(res.data);
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
    {/* <img src={adminimage} style={{borderRadius:"50%",width:"20%"}}></img> */}
  </center>
  
  <br></br>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-pencil"></i> </div>
      <input type="text" class="form-control" id="mciRegistrationNumber" placeholder="Username" required value={username} onChange={(e)=>{handleusername(e)}} />
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
      );
    
      }
export default AdminLoginComponent;

