import React,{useEffect, useState, useRef} from "react";
import { ReactDOM } from "react";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import AdminLoginComponent from "./AdminLoginComponent";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import DatePicker from "react-datepicker";
import PatientService from '../services/PatientService';
import AppointmentService from "../services/AppointmentService";


import "react-datepicker/dist/react-datepicker.css";
//import ListDoctorComponent from "./ListDoctorComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
const BookAppointmentComponent=()=>{
      const [specialization , setspecialization] = useState('');
      const [doc , setDoc] = useState();
      const [fetcheddoctors , setfetcheddoctors] = useState([]);
      const [flag, setFlag]= useState(false);
      const [selectedDate, setSelectedDate] = useState(new Date());
      const [selectedSlot, setSelectedSlot] = useState();
      const [setSlots, setSetSlots] = useState(false);
      const [selectedButton, setSelectedButton] = useState('');
      const oldButton = useRef('');
      const oldButtonColor = useRef('');
      const [selectedDateBoolean, setSelectedDateBoolean] = useState(false);
      const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);
      const [patientAppts, setPatientAppts] = useState([]);

    const handleSpecialization=(e)=> {
        setspecialization(e.target.value)
    }
    


    //console.log(Object.keys(selecteddate));
    var config={
        headers:{
            'Content-Length':50,
            'Content-Type':'text/plain'
        }
    };

    function Availabity() {
        console.log("in availibilty 4");
        return(
            <div>
                {/* <h2>{props.fetcheddoctors}</h2> */}
                <center><h2>Available Slots of Dr. {selectedDoctorDetails.name}.</h2></center>
                <table className="table table-striped table-light">
                <tbody >
                    {
                        <table>
                            <tr>
                                <td><button className='button1' onClick={(e)=>{setSelectedSlot("1"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_1===0?"white": selectedDoctorDetails.slot_1===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_1===2 || selectedDoctorDetails.slot_1===0}>10AM -10:30AM</button></td>
                                <td><button className='button2' onClick={(e)=>{setSelectedSlot("2"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_2===0?"white": selectedDoctorDetails.slot_2===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_2===2 || selectedDoctorDetails.slot_2===0} >10:30AM -11:00AM</button></td>
                                <td><button className='button3' onClick={(e)=>{setSelectedSlot("3"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_3===0?"white": selectedDoctorDetails.slot_3===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_3===2 || selectedDoctorDetails.slot_3===0}>11AM -11:30AM</button></td>
                                <td><button className='button4' onClick={(e)=>{setSelectedSlot("4"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_4===0?"white": selectedDoctorDetails.slot_4===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_4===2 || selectedDoctorDetails.slot_4===0}>11:30AM -12:00PM</button></td>
                                <td><button className='button5' onClick={(e)=>{setSelectedSlot("5"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_5===0?"white": selectedDoctorDetails.slot_5===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_5===2 || selectedDoctorDetails.slot_5===0}>12PM -12:30PM</button></td>
                                <td><button className='button6' onClick={(e)=>{setSelectedSlot("6"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_6===0?"white": selectedDoctorDetails.slot_6===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_6===2 || selectedDoctorDetails.slot_6===0}>12:30PM -01:00AM</button></td>
                                <td><button className='button7' onClick={(e)=>{setSelectedSlot("7"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_7===0?"white": selectedDoctorDetails.slot_7===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_7===2 || selectedDoctorDetails.slot_7===0}>01:00PM -01:30PM</button></td>
                                <td><button className='button8' onClick={(e)=>{setSelectedSlot("8"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_8===0?"white": selectedDoctorDetails.slot_8===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_8===2 || selectedDoctorDetails.slot_8===0}>01:30PM -02:00PM</button></td>
                                <td><button className='button9' onClick={(e)=>{setSelectedSlot("9"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_9===0?"white": selectedDoctorDetails.slot_9===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_9===2 || selectedDoctorDetails.slot_9===0}>02:00PM -02:30PM</button></td>
                                <td><button className='button10' onClick={(e)=>{setSelectedSlot("10"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_10===0?"white": selectedDoctorDetails.slot_10===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_10===2 || selectedDoctorDetails.slot_10===0}>2:30PM -03:00PM</button></td>
                        </tr>
                        <br></br>
                        <tr>
                                <td><button className='button11' onClick={(e)=>{setSelectedSlot("11"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_11===0?"white": selectedDoctorDetails.slot_11===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_11===2 || selectedDoctorDetails.slot_11===0}>03:00PM -03:30PM</button></td>
                                <td><button className='button12' onClick={(e)=>{setSelectedSlot("12"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_12===0?"white": selectedDoctorDetails.slot_12===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_12===2 || selectedDoctorDetails.slot_12===0}>03:30PM -04:00PM</button></td>
                                <td><button className='button13' onClick={(e)=>{setSelectedSlot("13"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_13===0?"white": selectedDoctorDetails.slot_13===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_13===2 || selectedDoctorDetails.slot_13===0}>04:00PM -04:30PM</button></td>
                                <td><button className='button14' onClick={(e)=>{setSelectedSlot("14"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_14===0?"white": selectedDoctorDetails.slot_14===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_14===2 || selectedDoctorDetails.slot_14===0}>04:30PM -05:00PM</button></td>
                                <td><button className='button15' onClick={(e)=>{setSelectedSlot("15"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_15===0?"white": selectedDoctorDetails.slot_15===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_15===2 || selectedDoctorDetails.slot_15===0}>05:00PM -05:30PM</button></td>
                                <td><button className='button16' onClick={(e)=>{setSelectedSlot("16"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_16===0?"white": selectedDoctorDetails.slot_16===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_16===2 || selectedDoctorDetails.slot_16===0}>05:30PM -06:00PM</button></td>
                                <td><button className='button17' onClick={(e)=>{setSelectedSlot("17"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_17===0?"white": selectedDoctorDetails.slot_17===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_17===2 || selectedDoctorDetails.slot_17===0}>06:00PM -06:30PM</button></td>
                                <td><button className='button18' onClick={(e)=>{setSelectedSlot("18"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_18===0?"white": selectedDoctorDetails.slot_18===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_18===2 || selectedDoctorDetails.slot_18===0}>06:30PM -07:00PM</button></td>
                                <td><button className='button19' onClick={(e)=>{setSelectedSlot("19"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_19===0?"white": selectedDoctorDetails.slot_19===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_19===2 || selectedDoctorDetails.slot_19===0}>07:00PM -07:30PM</button></td>
                                <td><button className='button20' onClick={(e)=>{setSelectedSlot("20"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_20===0?"white": selectedDoctorDetails.slot_20===1?"green":"red",}} disabled = {selectedDoctorDetails.slot_20===2 || selectedDoctorDetails.slot_20===0}>07:30PM -08:00PM</button></td>
                            </tr>

                        </table>
                    }
                </tbody>
                </table>
            </div>
         );
       }


    const handleSave = () => {
        var datetosend=selectedDate.getDate().toString()+"-"+(selectedDate.getMonth()+1).toString()+"-"+selectedDate.getFullYear().toString(); 
        const axios = require('axios').default;
        //console.log(specialization);
        axios.post(
            'http://localhost:8080/patient/Book',
            {
                doctor_id:selectedDoctorDetails.doctor_id,
                patient_id:localStorage.getItem('patientId'),
                hospital_name:selectedDoctorDetails.hospitalName,
                slot:selectedSlot,
                city:selectedDoctorDetails.city,
                date:datetosend
            }
            
            )
      .then((res) => {
          console.log("hello");
          //setfetcheddoctors(res.data);
          //console.log(fetcheddoctors[0]);
      })
      .catch((err) => {
          console.log(err);
      });
    }
    
    

    useEffect(() => {
        if(selectedButton!=='') {
           // console.log(selectedButton);
           oldButtonColor.current = document.getElementsByClassName(selectedButton)[0].style.backgroundColor;
           // console.log(document.getElementsByClassName(selectedButton));
           document.getElementsByClassName(selectedButton)[0].style.backgroundColor = "blue";
           // console.log(document.getElementsByClassName(selectedButton)[0].style.backgroundColor);
           if(oldButton.current!=='') {
               document.getElementsByClassName(oldButton.current)[0].style.backgroundColor = oldButtonColor.current;
           }
           oldButton.current = selectedButton;
        }
       
    }, [selectedButton])
   
    const handleButton = (buttonClassName) => {
        setSelectedButton(buttonClassName);
       //  console.log(document.getElementsByClassName(buttonClassName));
        console.log(document.getElementsByClassName(buttonClassName)[0].style.backgroundColor);
        
       //  setSelectedButton(document.getElementsByClassName(buttonClassName));
    }

    

    const appointmentOptions = () => {
        return (
            <div>
                <DatePicker dateFormat="dd MMMM, yyyy" selected={selectedDate} minDate={(new Date()).setDate((new Date).getDate() + 1)} placeholderText="Click to select a date" openToDate={new Date()} onChange={(date:Date) => {setSelectedDate(date); setSelectedDateBoolean(true); }}/>
            </div>
        )
    }

    const showSlots = () => {
        console.log("In show slots 4");
        return (
            <div>
                <Availabity></Availabity>
                <button onClick={()=>{
                    // setShowAppointmentOptions(false); 
                    setSelectedDoctorDetails(null);
                    handleSave();
                    setSelectedDateBoolean(false);
                    setSelectedDate('');
                    setSetSlots(false);
                    }}>Confirm appointment</button>
            </div>
        );
    }

    function onBook(selected_doctor_index){
        const obj = fetcheddoctors[selected_doctor_index];
        //console.log(obj);
        if(obj){
            //obj.slot_6=2;
            setSelectedDoctorDetails(obj);
        }
    }

    const handleSelectSlot = () => {
        console.log("in handle select slot 1");
        var datetosend=selectedDate.getDate().toString()+"-"+(selectedDate.getMonth()+1).toString()+"-"+selectedDate.getFullYear().toString(); 
         const axios = require('axios').default;
         PatientService.getSlotsByDateAndId(selectedDoctorDetails.doctor_id, datetosend)
         .then((res) => {
 
             if(selectedDoctorDetails){
  
                 for(let i=0;i<res.data.length;i++)
                 { 
                     if(res.data[i]===1) selectedDoctorDetails.slot_1=2;
                     if(res.data[i]===2) selectedDoctorDetails.slot_2=2;
                     if(res.data[i]===3) selectedDoctorDetails.slot_3=2;
                     if(res.data[i]===4) selectedDoctorDetails.slot_4=2;
                     if(res.data[i]===5) selectedDoctorDetails.slot_5=2;
                     if(res.data[i]===6) selectedDoctorDetails.slot_6=2;
                     if(res.data[i]===7) selectedDoctorDetails.slot_7=2;
                     if(res.data[i]===8) selectedDoctorDetails.slot_8=2;
                     if(res.data[i]===9) selectedDoctorDetails.slot_9=2;
                     if(res.data[i]===10) selectedDoctorDetails.slot_10=2;
                     if(res.data[i]===11) selectedDoctorDetails.slot_11=2;
                     if(res.data[i]===12) selectedDoctorDetails.slot_12=2;
                     if(res.data[i]===13) selectedDoctorDetails.slot_13=2;
                     if(res.data[i]===14) selectedDoctorDetails.slot_14=2;
                     if(res.data[i]===15) selectedDoctorDetails.slot_15=2;
                     if(res.data[i]===16) selectedDoctorDetails.slot_16=2;
                     if(res.data[i]===17) selectedDoctorDetails.slot_17=2;
                     if(res.data[i]===18) selectedDoctorDetails.slot_18=2;
                     if(res.data[i]===19) selectedDoctorDetails.slot_19=2;
                     if(res.data[i]===20) selectedDoctorDetails.slot_20=2;
                 }

              } 
              setSetSlots(true);
         }
       )
       .catch((err) => {
           console.log(err);
       });
    }

    function RenderingArrayOfObjects(){

        if(fetcheddoctors.length>0){
            
         const tableRows=fetcheddoctors.map(
             (doctor, index)=>{
                 return(
                     
                    <tr>
                        <td>{doctor.doctor_id}</td>
                        <td>{doctor.name}</td>
                        <td>{doctor.specialization}</td>
                        <td>{doctor.hospitalName}</td>
                        <td>{doctor.city}</td>
                        <td>{doctor.mobileNumber}</td>
                        <td>
                            <center>
                                <button onClick={() => onBook(index)} type="button" className="btn btn-primary">Book</button>
                            </center>
                        </td>
                        
                    </tr>
                     
                 )
             }
         )
         return(
             <div>
                 
                 <table className="table table-striped table-light" style={{border:"3px solid gray"}}>
                   <thead>
                   <tr>
                            <th>Doctor ID</th>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Hospital Name</th>
                            <th>City</th>
                            <th>Mobile Number</th>
                            <th>Appointment</th>
                        </tr>
                   </thead>
                   <tbody>
                     {tableRows}
                   </tbody>
                 </table>      
                 
             </div>
         )
     
        }
         else{
           return (
               <h3>Sorry..!, No doctors available with selected Specialization</h3>
           )
         }
       }
    

    const handleSubmit=(e)=> {
        const axios = require('axios').default;
        //console.log(specialization);
        axios.post(
            'http://localhost:8080/doctor/getBySpecial/'+specialization, )
      .then((res) => {
          //console.log("hello");
          setfetcheddoctors(res.data);
          //console.log(fetcheddoctors[0]);
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

        <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">Specialization</label>
            <select class="form-select" id="inlineFormSelectPref" required value={specialization} onChange={(e)=>{handleSpecialization(e)}}>
            <option value="" selected disabled>Select Specialization of a doctor you want to visit</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Paediatrician">Paediatrician</option>
            <option value="Neurosurgeon">Neurosurgeon</option>
            <option value="Gynecologist">Gynecologist</option>
            </select>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary" >Get Doctors with selected Specialization</button>
            </div>
        </form>
           <div style={{marginTop:"40px"}}>
                <RenderingArrayOfObjects />
            </div>
            <div>
                {selectedDoctorDetails && appointmentOptions()}
                {selectedDateBoolean && selectedDate!=='' && handleSelectSlot()}
                {setSlots && showSlots()}
            </div>

          

            
        </div>

      );
    
      }
export default BookAppointmentComponent;

