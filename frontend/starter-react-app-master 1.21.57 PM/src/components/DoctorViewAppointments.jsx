import React, { Component, useEffect, useState, useRef } from 'react';
import DoctorService from '../services/DoctorService';
import SlotToTime from '../services/SlotToTime';
import AppointmentService from '../services/AppointmentService';
import DatePicker from "react-datepicker";
import {Navigate } from 'react-router-dom';
import '../css/bookappointment.css'
const DoctorViewAppointments = (props) => {
    const [patientAppts, setPatientAppts] = useState([]);
    const [editButton, setEditButton] = useState();
    // const [patientId, setPatientId] = useState('');
    const [selectedSlot, setSelectedSlot] = useState();
    const [selectedDate, setSelectedDate] = useState('');
    // const [showAppointmentOptions, setShowAppointmentOptions] = useState(false);
    const [appointmentId, setAppointmentId] = useState(0);
    const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);
    const [selectedDateBoolean, setSelectedDateBoolean] = useState(false);
    const [setSlots, setSetSlots] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    // const [patientnames, setpatientnames] = useState([]);
    var pnames=[];
    const idnamemap = new Map();
    const oldButton = useRef('');
    const oldButtonColor = useRef('');

    // const handleDeleteAppt = (ApptId) => {
    //     AppointmentService.deletePatientAppt(ApptId)
    //     .then((res)=> {
    //         PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res1) => {
    //             setPatientAppts(res1.data);
    //             console.log(res1.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }




    useEffect(() => {
        DoctorService.getDoctorAppintmentsbyID(localStorage.getItem('Did'))
        .then((res) => {
            idnamemap.set(res.data[0][1],5);
            console.log(res.data);
            
            setPatientAppts(res.data);
           
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])
    console.log("lll",patientAppts);
    

    // const handleSave = () => {
    //     console.log(appointmentId);
    //     var datetosend=selectedDate.getDate().toString()+"-"+(selectedDate.getMonth()+1).toString()+"-"+selectedDate.getFullYear().toString(); 
    //     console.log("handleSave datetosend",datetosend);
    //     console.log("handleSave appt id", appointmentId);
    //     var body = {
    //         appointment_id: 0,
    //         city:'',
    //         date:'',
    //         doctor_id:0,
    //         hospital_name:'',
    //         patient_id:0,
    //         slot:0
    //     }
        
    //     for(let i=0; i<patientAppts.length; i++) {
    //         console.log("aaa",patientAppts[i][2]);
    //         if(patientAppts[i][0]==appointmentId) {
    //             body.appointment_id = patientAppts[i][0];
    //             body.city = patientAppts[i][4];
    //             body.date = datetosend;
    //             body.hospital_name = patientAppts[i][1];
    //             body.patient_id = patientAppts[i][2];
    //             body.slot = selectedSlot;
    //         }
    //     }
    //     console.log(body);
    //     AppointmentService.editPatientAppt(body)
    //     .then((res)=> {
    //         PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res1) => {
    //             setPatientAppts(res1.data);
    //             console.log(res1.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }


    // const handleSelectSlot = () => {
    //     console.log("in handle select slot 1");
    //     onBook();
    // }




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
                    // handleSave();
                    setSelectedDateBoolean(false);
                    setSelectedDate('');
                    setSetSlots(false);
                    }}>Save</button>
            </div>
        );
    }

    // function onBook(){
    //     console.log("In on book 2");
    //     var datetosend=selectedDate.getDate().toString()+"-"+(selectedDate.getMonth()+1).toString()+"-"+selectedDate.getFullYear().toString(); 
    //      const axios = require('axios').default;
    //      PatientService.getSlotsByDateAndId(selectedDoctorDetails.doctor_id, datetosend)
    //      .then((res) => {
 
    //          if(selectedDoctorDetails){
  
    //              for(let i=0;i<res.data.length;i++)
    //              { 
    //                  if(res.data[i]===1) selectedDoctorDetails.slot_1=2;
    //                  if(res.data[i]===2) selectedDoctorDetails.slot_2=2;
    //                  if(res.data[i]===3) selectedDoctorDetails.slot_3=2;
    //                  if(res.data[i]===4) selectedDoctorDetails.slot_4=2;
    //                  if(res.data[i]===5) selectedDoctorDetails.slot_5=2;
    //                  if(res.data[i]===6) selectedDoctorDetails.slot_6=2;
    //                  if(res.data[i]===7) selectedDoctorDetails.slot_7=2;
    //                  if(res.data[i]===8) selectedDoctorDetails.slot_8=2;
    //                  if(res.data[i]===9) selectedDoctorDetails.slot_9=2;
    //                  if(res.data[i]===10) selectedDoctorDetails.slot_10=2;
    //                  if(res.data[i]===11) selectedDoctorDetails.slot_11=2;
    //                  if(res.data[i]===12) selectedDoctorDetails.slot_12=2;
    //                  if(res.data[i]===13) selectedDoctorDetails.slot_13=2;
    //                  if(res.data[i]===14) selectedDoctorDetails.slot_14=2;
    //                  if(res.data[i]===15) selectedDoctorDetails.slot_15=2;
    //                  if(res.data[i]===16) selectedDoctorDetails.slot_16=2;
    //                  if(res.data[i]===17) selectedDoctorDetails.slot_17=2;
    //                  if(res.data[i]===18) selectedDoctorDetails.slot_18=2;
    //                  if(res.data[i]===19) selectedDoctorDetails.slot_19=2;
    //                  if(res.data[i]===20) selectedDoctorDetails.slot_20=2;
    //              }

    //           } 
    //           setSetSlots(true);
    //      }
    //    )
    //    .catch((err) => {
    //        console.log(err);
    //    });  
    //  } 

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

  
    return (
    <div>
        {localStorage.getItem("Dlogin")==='1' ?
        <div>
            
            {/* {selectedDoctorDetails && appointmentOptions()} */}
            {/* {selectedDateBoolean && selectedDate!=='' && handleSelectSlot()} */}
            {/* {setSlots && showSlots()} */}
            <center style={{marginTop:"10px"}}><h2>My Appointment List</h2></center>
                <table className="table table-striped table-hover my-table" style={{marginTop:"10px"}}>
                <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Patient Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                       
                        {/* <th colspan="2" scope="colgroup">   Actions  </th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        patientAppts?.map(
                            patientAppt=>
                            <tr key={patientAppt[0]}>
                                <td >{patientAppt[0]}</td>
                                <td>{patientAppt[1]}</td>
                                <td>{ SlotToTime(patientAppt[2]).start}</td>
                                <td>{ SlotToTime(patientAppt[2]).end}</td>
                                <td >{patientAppt[4]}</td>
                               
                                
                                
                                
                                {/* <td><button className='editButton' onClick={(e)=>{
                                    PatientService.getDocById(patientAppt[2])
                                    .then((res) => {
                                        console.log(res.data);
                                        setSelectedDoctorDetails(res.data);
                                        // setShowAppointmentOptions(true);
                                        setAppointmentId(patientAppt[0]);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                                    }}>Edit</button></td> */}
                                {/* <td><button className='deleteButton' onClick={()=>{handleDeleteAppt(patientAppt[0])}}>Delete</button></td> */}
                            </tr>
                        )
                    }
                </tbody>
                </table>
        </div>:<Navigate replace to="/doctor/login"></Navigate>
}
</div>
);
}

export default DoctorViewAppointments;