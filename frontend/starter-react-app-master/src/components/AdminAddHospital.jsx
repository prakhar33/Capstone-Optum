import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/hospital_signup.png'
import {useNavigate } from 'react-router-dom';
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import {Navigate } from 'react-router-dom';
import '../css/manage.css'
import swal from 'sweetalert';
const AdminAddHospital=()=>{
      const [hospital_name , sethospitalname] = useState('');
      const [city , setcity] = useState('');
      const [mobileNumber , setmobileNumber] = useState('');
      const [password , setpassword] = useState('');
      const [confirmpassword, setconfirmpassword] = useState('');
      //console.log(startTime);
    const handleHospitalName=(e)=> {
        sethospitalname(e.target.value)
    }
   
    const handlecity=(e)=> {
        setcity(e.target.value)
    }
    const handlemobileNumber=(e)=> {
      setmobileNumber(e.target.value)
  }
    const handlepassword=(e)=> {
        setpassword(e.target.value)
    }
    const handleconfirmpassword=(e)=> {
        setconfirmpassword(e.target.value)
    }

    const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        if(password!==confirmpassword)
        {
            alert("Password and Confirm Password doesn't match...!");
        }
        else{

        const axios = require('axios').default;
        axios.post('http://127.0.0.1:9090/hospital/signup', {
        hospital_name: hospital_name,
        city: city,
        mobileNumber: mobileNumber,
        password: password
      })
      .then((res) => {
          console.log(res.data);
          swal({
            icon: "success",
            text: "Hospital added successfully"
          }).then(function() {
            window.location = "http://localhost:3000/admin/managehospitals";
        });
      })
      .catch((err) => {
          console.log(err);
          swal("Something went wrong!", err.message, "error");
      });
      e.preventDefault();
        } 
    }
      return (
<center>
{localStorage.getItem("Adminlogin")==='1' ?
<div className="fill-window" style={{backgroundColor:"white"}}>

<div id="formdiv">
<form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center" style={{width:"40%",marginTop: "70px",backgroundColor:"#ececed",borderRadius:"20px 0px 20px 0px", boxShadow:"3px 3px 0px 5px black",padding:"8px"}}
onSubmit={(e)=>{handleSubmit(e)}}>
  <center>
    <div>
     <h1 style={{color:"black"}}>Add New Hospital</h1>
    </div>
    <img src={signupimage} style={{borderRadius:"50%",width:"20%"}}></img>
  </center>
  <div class="col-12" >
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Hospital Name</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-user"></i> </div>
      <input type="text" class="form-control" id="name" placeholder="Hospital Name" required value={hospital_name} onChange={(e)=>{handleHospitalName(e)}} />
    </div>
  </div>
  
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">City</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-home"></i> </div>
      <input type="text" class="form-control" id="city" placeholder="City" required value={city} onChange={(e)=>{handlecity(e)}} />
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Mobile Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-mobile"></i> </div>
      <input type="text" class="form-control" id="city" placeholder="Mobile Number" required minLength={10} maxLength={10} pattern="[1-9]{1}[0-9]{9}" value={mobileNumber} onChange={(e)=>{handlemobileNumber(e)}} />
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
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Re-entered Password</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-key"></i> </div>
      <input type="password" class="form-control" id="confirmpassword" placeholder="Confirm Password" required maxLength={8} value={confirmpassword} onChange={(e)=>{handleconfirmpassword(e)}} />
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary my-button" >Add</button>
  </div>
<center>

</center>
</form>
</div>

</div>:<Navigate replace to="/admin/login"></Navigate>
}
</center>
      );
    
      }
export default AdminAddHospital;

