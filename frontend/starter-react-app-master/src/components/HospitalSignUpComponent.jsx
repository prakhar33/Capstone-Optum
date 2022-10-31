import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/hospital_signup.png'
import {useNavigate } from 'react-router-dom';
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import swal from 'sweetalert';
const HospitalSignUpComponent=()=>{
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
            text: "Registered Successfully"
          });
          navigate("/hospital/login");
      })
      .catch((err) => {
          console.log(err);
          swal("Please try again",err.message, "error");
      });
      e.preventDefault();
        } 
    }
      return (
<center>
<div className="fill-window bg-signup">
<HomeHeader />
<div id="formdiv">
<form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center" style={{width:"40%",marginTop: "100px",backgroundColor:"black",borderRadius:"20px 0px 20px 0px", boxShadow:"8px 12px 10px 5px grey",padding:"8px"}}
onSubmit={(e)=>{handleSubmit(e)}}>
  <center>
    <div>
     <h1 style={{color:"white"}}>SignUp</h1>
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
<center>
<div>
        <a color="primary" className="px-4" style={{textDecoration: "none",cursor:"pointer"}}
                onClick={()=>navigate("/hospital/login")}
                  >
                  Already have an account? Login
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
export default HospitalSignUpComponent;

