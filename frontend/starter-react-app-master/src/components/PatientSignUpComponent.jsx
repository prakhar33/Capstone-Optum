import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/patient_signup.png'
import {useNavigate } from 'react-router-dom';
const PatientSignUpComponent=()=>{
      const [name , setName] = useState('');
      const [gender , setgender] = useState('');
      const [bloodGroup , setbloodGroup] = useState('');
      const [mobileNumber , setmobileNumber] = useState('');
      const [age , setage] = useState('');
      const [city , setcity] = useState('');
      const [password , setpassword] = useState('');
      const [confirmpassword, setconfirmpassword] = useState('');
      //console.log(startTime);
    const handleName=(e)=> {
        setName(e.target.value)
    }
    const handlegender=(e)=> {
        setgender(e.target.value)
    }
    const handlebloodGroup=(e)=> {
        setbloodGroup(e.target.value)
    }
    const handlemobileNumber=(e)=> {
        setmobileNumber(e.target.value)
    }
    const handleage=(e)=> {
        setage(e.target.value)
    }
    const handlecity=(e)=> {
        setcity(e.target.value)
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
        axios.post('http://localhost:9090/patient/signup', {
        name: name,
        gender: gender,
        bloodGroup: bloodGroup,
        mobileNumber: mobileNumber,
        age: age,
        city: city,
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
    }
      return (
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
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Name</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-user"></i> </div>
      <input type="text" class="form-control" id="name" placeholder="Name" required value={name} onChange={(e)=>{handleName(e)}} />
    </div>
  </div>
  
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Gender</label>
    <select class="form-select" id="inlineFormSelectPref" required value={gender} onChange={(e)=>{handlegender(e)}}>
      <option value="" selected disabled>Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Blood Group</label>
    <select class="form-select" id="inlineFormSelectPref" required value={bloodGroup} onChange={(e)=>{handlebloodGroup(e)}}>
      <option value="" selected disabled>Blood Group</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Mobile Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-mobile"></i> </div>
      <input type="text" class="form-control" id="hospitalName" placeholder="Mobile Number" required minLength={10} maxLength={10} pattern="[1-9]{1}[0-9]{9}" value={mobileNumber} onChange={(e)=>{handlemobileNumber(e)}} />
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Age</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-font"></i> </div>
      <input type="text" class="form-control" id="city" placeholder="Age in Years" required pattern="^[0-9]*$" value={age} onChange={(e)=>{handleage(e)}} />
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
                onClick={()=>navigate("/patient/login")}
                  >
                  Already a member? Login
                </a>
</div>
</center>
</form>

</div>
      );
    
      }
export default PatientSignUpComponent;

