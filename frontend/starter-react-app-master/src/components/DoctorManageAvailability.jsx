import React, { Component, useEffect, useState, useRef } from 'react';
import swal from 'sweetalert';
import signupimage from '../images/doctor_signup.png'
import HomeHeader from '../components/HomeHeader'
import HomeFooter from './HomeFooter'


const DoctorManageAvailability=()=>{
    const [startTime , setstartTime] = useState('');
    const [endTime , setendTime] = useState('');
    
    const handlestartTime=(e)=> {
        setstartTime(e.target.value)
    }
    const handleendTime=(e)=> {
        setendTime(e.target.value)
    }

    const handleSubmit=(e)=> {
        const axios = require('axios').default;
        axios.post('http://localhost:9090/doctor/changeAvailability', {
            start_time: startTime,
            end_time: endTime
      })
      .then((res) => {
          console.log(res.data);
          swal({
            icon: "success",
            text: "Availability changed Successfully"
          });
        //   navigate("/doctor/login");
      })
      .catch((err) => {
          console.log(err);
          swal("Please try again",err.message, "error");
      });
      e.preventDefault();
    } 
    return (
        <center>
        <div className="fill-window bg-signup">
        <HomeHeader />
        <div id="formdiv">
        <form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center" style={{width:"40%",marginTop: "10px",backgroundColor:"black",borderRadius:"20px 0px 20px 0px", boxShadow:"8px 12px 10px 5px grey",padding:"8px"}}
        onSubmit={(e)=>{handleSubmit(e)}}>
          <center>
            <div>
             <h1 style={{color:"white"}}>SignUp</h1>
            </div>
            <img src={signupimage} style={{borderRadius:"50%",width:"20%"}}></img>
          </center>
          {/* <div class="col-12" >
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
          </div> */}
          
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
        
          {/* <div class="col-12">
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
          </div> */}
        
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        <center>
        <div>
                <a color="primary" className="px-4" style={{textDecoration: "none",cursor:"pointer"}}
                        // onClick={()=>navigate("/doctor/login")}
                          >
                          Already a member? Login
                        </a>
        </div>
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
          
export default DoctorManageAvailability;