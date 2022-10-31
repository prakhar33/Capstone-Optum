import React,{useState} from "react";
import axios from "axios";
import signupimage from '../images/doctor_signup.png'
import {useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const AdminAddDoctor=()=>{
      const [hospitalName , sethospitalName] = useState('');
      const [mciRegistrationNumber , setmciRegistrationNumber] = useState('');
      const [name , setname] = useState('');
      const [specialization , setspecialization] = useState('');
      const [startTime , setstartTime] = useState('');
      const [endTime , setendTime] = useState('');
      const [city , setcity] = useState('');
      const [password , setpassword] = useState('');
      const [confirmpassword, setconfirmpassword] = useState('');
      const [mobileNumber, setmobileNumber] = useState('');
      const [slot_1, setslot_1] = useState('0');
      const [slot_2, setslot_2] = useState('0');
      const [slot_3, setslot_3] = useState('0');
      const [slot_4, setslot_4] = useState('0');
      const [slot_5, setslot_5] = useState('0');
      const [slot_6, setslot_6] = useState('0');
      const [slot_7, setslot_7] = useState('0');
      const [slot_8, setslot_8] = useState('0');
      const [slot_9, setslot_9] = useState('0');
      const [slot_10, setslot_10] = useState('0');
      const [slot_11, setslot_11] = useState('0');
      const [slot_12, setslot_12] = useState('0');
      const [slot_13, setslot_13] = useState('0');
      const [slot_14, setslot_14] = useState('0');
      const [slot_15, setslot_15] = useState('0');
      const [slot_16, setslot_16] = useState('0');
      const [slot_17, setslot_17] = useState('0');
      const [slot_18, setslot_18] = useState('0');
      const [slot_19, setslot_19] = useState('0');
      const [slot_20, setslot_20] = useState('0');

      //console.log(startTime);
      const handlehospitalName=(e)=> {
        sethospitalName(e.target.value)
    }

    //sethospitalName(localStorage.getItem("Hid"));
    const handlemciRegistrationNumber=(e)=> {
        setmciRegistrationNumber(e.target.value)
    }
    const handlename=(e)=> {
        setname(e.target.value)
    }
    const handlespecialization=(e)=> {
        setspecialization(e.target.value)
    }
    const handlestartTime=(e)=> {
        setstartTime(e.target.value)
    }
    const handleendTime=(e)=> {
        setendTime(e.target.value)
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
    const handlemobileNumber=(e)=>{
        setmobileNumber(e.target.value)
    }

    const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        if(password!==confirmpassword)
        {
            alert("Password and Confirm Password doesn't match...!");
        }
        else{

        const axios = require('axios').default;
        axios.post('http://127.0.0.1:9090/doctor/signup', {
        hospitalName: hospitalName,
        mci_registration_number: mciRegistrationNumber,
        name: name,
        specialization: specialization,
        start_time: startTime,
        end_time: endTime,
        city: city,
        mobileNumber: mobileNumber,
        password: password,
        slot_1:slot_1,
        slot_2:slot_2,
        slot_3:slot_3,
        slot_4:slot_4,
        slot_5:slot_5,
        slot_6:slot_6,
        slot_7:slot_7,
        slot_8:slot_8,
        slot_9:slot_9,
        slot_10:slot_10,
        slot_11:slot_11,
        slot_12:slot_12,
        slot_13:slot_13,
        slot_14:slot_14,
        slot_15:slot_15,
        slot_16:slot_16,
        slot_17:slot_17,
        slot_18:slot_18,
        slot_19:slot_19,
        slot_20:slot_20
      })
      .then((res) => {
          console.log(res.data);
          swal({
            icon: "success",
            text: "Doctor added successfully"
          }).then(function() {
            window.location = "http://localhost:3000/admin/managedoctors";
        });
      })
      .catch((err) => {
          console.log(err);
          swal("Something went wrong!", err.message, "error");
      });
      e.preventDefault();
        } 
    }

  //  function redirectToLogin(){
  //   navigate("/doctor/login");
  //  }
  
      return (
<center>
<div className="fill-window " style={{backgroundColor:"white"}}>
<div id="formdiv">
<form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center" style={{width:"40%",marginTop: "30px",backgroundColor:"#ececed",borderRadius:"20px 0px 20px 0px", boxShadow:"3px 3px 0px 5px black",padding:"8px"}}
onSubmit={(e)=>{handleSubmit(e)}}>
  <center>
    <div>
     <h1 >Add New Doctor</h1>
    </div>
    <img src={signupimage} style={{borderRadius:"50%",width:"20%"}}></img>
  </center>
  <div class="col-12" >
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-user"></i> </div>
      <input type="text" class="form-control" id="name" placeholder="Name" required value={name} onChange={(e)=>{handlename(e)}} />
    </div>
  </div>
  <br></br>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">MCI Registration Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-pencil"></i> </div>
      <input type="text" class="form-control" id="mciRegistrationNumber" pattern="^[0-9]*$" placeholder="MCI Registration Number" required value={mciRegistrationNumber} onChange={(e)=>{handlemciRegistrationNumber(e)}} />
    </div>
  </div>
  
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Specialization</label>
    <select class="form-select" id="inlineFormSelectPref" required value={specialization} onChange={(e)=>{handlespecialization(e)}}>
      <option value="" selected disabled>Select Specialization</option>
      <option value="Orthopedic">Orthopedic</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Paediatrician">Paediatrician</option>
      <option value="Neurosurgeon">Neurosurgeon</option>
      <option value="Gynecologist">Gynecologist</option>
    </select>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Hospital Name</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-hospital-o"></i> </div>
      <input type="text" class="form-control" id="hospitalName" placeholder="Hospital Name" required value={hospitalName} onChange={(e)=>{handlehospitalName(e)}} />
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">City</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-home"></i> </div>
      <input type="text" class="form-control" id="city" placeholder="City" required value={city} onChange={(e)=>{handlecity(e)}} />
    </div>
  </div>
  <div class="col-12" >
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Mobile Number</label>
    <div class="input-group">
      <div class="input-group-text"><i class="fa fa-mobile"></i> </div>
      <input type="text" class="form-control" id="mobileNumber" placeholder="Mobile Number (This will be your 'USERNAME')" required minLength={10} maxLength={10} pattern="[1-9]{1}[0-9]{9}" value={mobileNumber} onChange={(e)=>{handlemobileNumber(e)}} />
    </div>
  </div>
  
  <div class="row" style={{marginTop:"16px"}}>
  <div class="col-md-6" style={{width:"50%"}}>
  <label class="visually-hidden" for="inlineFormSelectPref">Availability Timings</label>
    <select class="form-select" id="inlineFormSelectPref" required value={startTime} onChange={(e)=>{handlestartTime(e)}}>
      <option value="" selected disabled>Select Availability Start Time</option>
      <option value="1">10:00 AM</option>
      <option value="2">10:30 AM</option>
      <option value="3">11:00 AM</option>
      <option value="4">11:30 AM</option>
      <option value="5">12:00 PM</option>
      <option value="6">12:30 PM</option>
      <option value="7">01:00 PM</option>
      <option value="8">01:30 PM</option>
      <option value="9">02:00 PM</option>
      <option value="10">02:30 PM</option>
      <option value="11">03:00 PM</option>
      <option value="12">03:30 PM</option>
      <option value="13">04:00 PM</option>
      <option value="14">04:30 PM</option>
      <option value="15">05:00 PM</option>
      <option value="16">05:30 PM</option>
      <option value="17">06:00 PM</option>
      <option value="18">06:30 PM</option>
      <option value="19">07:00 PM</option>
      <option value="20">07:30 PM</option>
    </select>
  </div>
  <div class="col-md-6" style={{width:"50%"}}>
  <label class="visually-hidden" for="inlineFormSelectPref">Availability Timings</label>
    <select class="form-select" id="inlineFormSelectPref" required value={endTime} onChange={(e)=>{handleendTime(e)}}>
      <option value="" selected disabled>Select Availability End Time</option>
      <option value="2">10:30 AM</option>
      <option value="3">11:00 AM</option>
      <option value="4">11:30 AM</option>
      <option value="5">12:00 PM</option>
      <option value="6">12:30 PM</option>
      <option value="7">01:00 PM</option>
      <option value="8">01:30 PM</option>
      <option value="9">02:00 PM</option>
      <option value="10">02:30 PM</option>
      <option value="11">03:00 PM</option>
      <option value="12">03:30 PM</option>
      <option value="13">04:00 PM</option>
      <option value="14">04:30 PM</option>
      <option value="15">05:00 PM</option>
      <option value="16">05:30 PM</option>
      <option value="17">06:00 PM</option>
      <option value="18">06:30 PM</option>
      <option value="19">07:00 PM</option>
      <option value="20">07:30 PM</option>
      <option value="21">08:00 PM</option>

    </select>
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
{/* <div>
        <a color="primary" className="px-4" style={{textDecoration: "none",cursor:"pointer"}}
                onClick={()=>navigate("/doctor/login")}
                  >
                  Already a member? Login
                </a>
</div> */}
</center>
</form>
</div>

</div>
</center>
      );
    
      }
export default AdminAddDoctor;

