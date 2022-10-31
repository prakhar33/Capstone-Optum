import React, { Component, useEffect, useState, useRef } from 'react';
import PatientService from '../services/PatientService';
import SlotToTime from '../services/SlotToTime';
import AppointmentService from '../services/AppointmentService';
import DatePicker from "react-datepicker";
import swal from 'sweetalert';
import '../css/bookappointment.css'
const PresentPatientAppt = (props) => {
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
    const oldButton = useRef('');
    const oldButtonColor = useRef('');

    const handleDeleteAppt = (ApptId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this appointment",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                AppointmentService.deletePatientAppt(ApptId)
                .then((res)=> {
                    PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res1) => {
                        filterAppts(res1.data);
                        swal({
                            icon: "success",
                            text: "Appointment deleted successfully"
                          });
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
            } else {
              swal("Your appointment is not deleted!");
            }
          });

        // swal("Are you sure?", {
        //     dangerMode: true,
        //     buttons: true,
        //   }).then(function(result) {
        //     AppointmentService.deletePatientAppt(ApptId)
        //     .then((res)=> {
        //         PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res1) => {
        //             filterAppts(res1.data);
        //             swal({
        //                 icon: "success",
        //                 text: "Appointment deleted successfully"
        //               });
        //         })
        //         .catch((err)=>{
        //             console.log(err);
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // });  
    }

    

    const compareDates = (currDate, currMonth, currYear, fetchedDate, fetchedMonth, fetchedYear) => {
        if(parseInt(fetchedYear)>parseInt(currYear)) {
            return true;
        } else 
        if(parseInt(fetchedMonth)>parseInt(currMonth)) {
            return true;
        } else 
        if(parseInt(fetchedDate)>parseInt(currDate)) {
            return true;
        }
        else return false;
    }

    const filterAppts = (data) => {
        var temp = [];
        for(let i=0; i<data.length;i++) {
            var currentDate = new Date();
            var currDate = currentDate.getDate();
            var currMonth = currentDate.getMonth();
            var currYear = currentDate.getFullYear();
            var fetched = data[i][6].split('-');
            var fetchedDate = fetched[0];
            var fetchedMonth = fetched[1]-1;
            var fetchedYear = fetched[2];

            if(compareDates(currDate, currMonth, currYear, fetchedDate, fetchedMonth, fetchedYear)) {
                temp.push(data[i]);
            }
        }
        setPatientAppts(temp);
    }



    useEffect(() => {
        PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res) => {
            filterAppts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])
    

    const handleSave = () => {
        console.log(appointmentId);
        var datetosend=selectedDate.getDate().toString()+"-"+(selectedDate.getMonth()+1).toString()+"-"+selectedDate.getFullYear().toString(); 
        console.log("handleSave datetosend",datetosend);
        console.log("handleSave appt id", appointmentId);
        var body = {
            appointment_id: 0,
            city:'',
            date:'',
            doctor_id:0,
            hospital_name:'',
            patient_id:0,
            slot:0
        }
        for(let i=0; i<patientAppts.length; i++) {
            if(patientAppts[i][0]==appointmentId) {
                body.appointment_id = patientAppts[i][0];
                body.city = patientAppts[i][4];
                body.date = datetosend;
                body.hospital_name = patientAppts[i][1];
                body.patient_id = patientAppts[i][2];
                body.slot = selectedSlot;
            }
        }
        AppointmentService.editPatientAppt(body)
        .then((res)=> {
            PatientService.getAllPatientAppts(localStorage.getItem('Pid')).then((res1) => {
                filterAppts(res1.data);
                console.log("My result",res1.data);
                swal({
                    icon: "success",
                    text: "Appointment edited successfully"
                  });
            })
            .catch((err)=>{
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    const handleSelectSlot = () => {
        console.log("in handle select slot 1");
        onBook();
    }




    const appointmentOptions = () => {
        return (
            <div>
                <center><h2>Editing appointment with Appointment ID - {appointmentId}</h2></center>
                <div>
                    <DatePicker dateFormat="dd MMMM, yyyy" selected={selectedDate} minDate={(new Date()).setDate((new Date).getDate() + 1)} placeholderText="Click to select a date" openToDate={new Date()} onChange={(date:Date) => {setSelectedDate(date); setSelectedDateBoolean(true); }}/>
                </div>
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
                    }} class="my-button" style={{height:"40px",width:"100px"}}>Save</button>
            </div>
        );
    }


    // useEffect(() => {
    //     console.log("in use effect 3");
    //     // console.log(selectedDate);
    //     // if(selectedDate!=='')
    //     //     showSlots();
    // }, [setSlots])



    function onBook(){
        console.log("In on book 2");
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

    useEffect(() => {
         if(selectedButton!=='') {
            // console.log(selectedButton);
            oldButtonColor.current = document.getElementsByClassName(selectedButton)[0].style.backgroundColor;
            // console.log(document.getElementsByClassName(selectedButton));
            document.getElementsByClassName(selectedButton)[0].style.backgroundColor = "var(--myblue)";
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
                <center>
                    {/* <h2>Editing appointment with Appointment ID - {appointmentId}</h2> */}
                    <h4>Available Slots of Dr. {selectedDoctorDetails.name}.</h4>
                </center>
                <table className="table table-striped table-light">
                <tbody >
                    {
                        <table class="table table-striped table-light my-slot-table">
                            <tr>
                                <td><button className='button1' onClick={(e)=>{setSelectedSlot("1"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_1===0?"var(--mygrey)": selectedDoctorDetails.slot_1===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_1===2 || selectedDoctorDetails.slot_1===0}>10AM -10:30AM</button></td>
                                <td><button className='button2' onClick={(e)=>{setSelectedSlot("2"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_2===0?"var(--mygrey)": selectedDoctorDetails.slot_2===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_2===2 || selectedDoctorDetails.slot_2===0} >10:30AM -11:00AM</button></td>
                                <td><button className='button3' onClick={(e)=>{setSelectedSlot("3"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_3===0?"var(--mygrey)": selectedDoctorDetails.slot_3===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_3===2 || selectedDoctorDetails.slot_3===0}>11AM -11:30AM</button></td>
                                <td><button className='button4' onClick={(e)=>{setSelectedSlot("4"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_4===0?"var(--mygrey)": selectedDoctorDetails.slot_4===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_4===2 || selectedDoctorDetails.slot_4===0}>11:30AM -12:00PM</button></td>
                                <td><button className='button5' onClick={(e)=>{setSelectedSlot("5"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_5===0?"var(--mygrey)": selectedDoctorDetails.slot_5===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_5===2 || selectedDoctorDetails.slot_5===0}>12PM -12:30PM</button></td>
                                <td><button className='button6' onClick={(e)=>{setSelectedSlot("6"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_6===0?"var(--mygrey)": selectedDoctorDetails.slot_6===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_6===2 || selectedDoctorDetails.slot_6===0}>12:30PM -01:00AM</button></td>
                                <td><button className='button7' onClick={(e)=>{setSelectedSlot("7"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_7===0?"var(--mygrey)": selectedDoctorDetails.slot_7===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_7===2 || selectedDoctorDetails.slot_7===0}>01:00PM -01:30PM</button></td>
                                <td><button className='button8' onClick={(e)=>{setSelectedSlot("8"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_8===0?"var(--mygrey)": selectedDoctorDetails.slot_8===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_8===2 || selectedDoctorDetails.slot_8===0}>01:30PM -02:00PM</button></td>
                                <td><button className='button9' onClick={(e)=>{setSelectedSlot("9"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_9===0?"var(--mygrey)": selectedDoctorDetails.slot_9===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_9===2 || selectedDoctorDetails.slot_9===0}>02:00PM -02:30PM</button></td>
                                <td><button className='button10' onClick={(e)=>{setSelectedSlot("10"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_10===0?"var(--mygrey)": selectedDoctorDetails.slot_10===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_10===2 || selectedDoctorDetails.slot_10===0}>2:30PM -03:00PM</button></td>
                        </tr>
                        
                        <tr>
                                <td><button className='button11' onClick={(e)=>{setSelectedSlot("11"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_11===0?"var(--mygrey)": selectedDoctorDetails.slot_11===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_11===2 || selectedDoctorDetails.slot_11===0}>03:00PM -03:30PM</button></td>
                                <td><button className='button12' onClick={(e)=>{setSelectedSlot("12"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_12===0?"var(--mygrey)": selectedDoctorDetails.slot_12===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_12===2 || selectedDoctorDetails.slot_12===0}>03:30PM -04:00PM</button></td>
                                <td><button className='button13' onClick={(e)=>{setSelectedSlot("13"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_13===0?"var(--mygrey)": selectedDoctorDetails.slot_13===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_13===2 || selectedDoctorDetails.slot_13===0}>04:00PM -04:30PM</button></td>
                                <td><button className='button14' onClick={(e)=>{setSelectedSlot("14"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_14===0?"var(--mygrey)": selectedDoctorDetails.slot_14===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_14===2 || selectedDoctorDetails.slot_14===0}>04:30PM -05:00PM</button></td>
                                <td><button className='button15' onClick={(e)=>{setSelectedSlot("15"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_15===0?"var(--mygrey)": selectedDoctorDetails.slot_15===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_15===2 || selectedDoctorDetails.slot_15===0}>05:00PM -05:30PM</button></td>
                                <td><button className='button16' onClick={(e)=>{setSelectedSlot("16"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_16===0?"var(--mygrey)": selectedDoctorDetails.slot_16===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_16===2 || selectedDoctorDetails.slot_16===0}>05:30PM -06:00PM</button></td>
                                <td><button className='button17' onClick={(e)=>{setSelectedSlot("17"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_17===0?"var(--mygrey)": selectedDoctorDetails.slot_17===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_17===2 || selectedDoctorDetails.slot_17===0}>06:00PM -06:30PM</button></td>
                                <td><button className='button18' onClick={(e)=>{setSelectedSlot("18"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_18===0?"var(--mygrey)": selectedDoctorDetails.slot_18===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_18===2 || selectedDoctorDetails.slot_18===0}>06:30PM -07:00PM</button></td>
                                <td><button className='button19' onClick={(e)=>{setSelectedSlot("19"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_19===0?"var(--mygrey)": selectedDoctorDetails.slot_19===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_19===2 || selectedDoctorDetails.slot_19===0}>07:00PM -07:30PM</button></td>
                                <td><button className='button20' onClick={(e)=>{setSelectedSlot("20"); handleButton(e.target.classList[0])}} style={{backgroundColor: selectedDoctorDetails.slot_20===0?"var(--mygrey)": selectedDoctorDetails.slot_20===1?"var(--mygreen)":"var(--myred)",}} disabled = {selectedDoctorDetails.slot_20===2 || selectedDoctorDetails.slot_20===0}>07:30PM -08:00PM</button></td>
                            </tr>
                            <tr >
                           <td colspan="2"> <div height="5px" width="5px" style={{backgroundColor:"var(--mygreen)",border:"2px solid black"}}>Available Slots</div></td>
                        </tr>
                        <tr>
                           <td colspan="2"><div height="5px" width="5px" style={{backgroundColor:"var(--myred)",border:"2px solid black"}}>Already Booked Slots</div></td>
                        </tr>
                        <tr>
                           <td colspan="2"><div height="5px" width="5px" style={{backgroundColor:"var(--mygrey)",border:"2px solid black"}}>Unavailable Slots</div></td>
                        </tr>
                        <tr>
                           <td colspan="2"><div height="5px" width="5px" style={{backgroundColor:"var(--myblue)",border:"2px solid black"}}>Your Selected Slot</div></td>
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
            
            
            {/* <center><h2>Patient Appointment List</h2></center> */}
                <table className="table table-striped table-hover my-table" style={{marginTop:"20px"}}>
                <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Hospital Name</th>
                        <th>Doctor Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                        <th>City</th>
                        <th colSpan="2" scope="colgroup">   Actions  </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientAppts?.map(
                            patientAppt=>
                            <tr key={patientAppt[0]}>
                                <td >{patientAppt[0]}</td>
                                <td >{patientAppt[1]}</td>
                                <td>{patientAppt[3]}</td>
                                <td>{ SlotToTime(patientAppt[4]).start}</td>
                                <td>{ SlotToTime(patientAppt[4]).end}</td>
                                <td>{patientAppt[6]}</td>
                                <td>{patientAppt[5]}</td>
                                
                                <td><button className='editButton' onClick={(e)=>{
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
                                    }} title="Edit Appointment"><span class="fa fa-edit"></span></button></td>
                                <td><button className='deleteButton' onClick={()=>{handleDeleteAppt(patientAppt[0])}} title="Delete Appointment"><span class="fa fa-trash"></span></button></td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            {selectedDoctorDetails && appointmentOptions()}
            {selectedDateBoolean && selectedDate!=='' && handleSelectSlot()}
            {setSlots && showSlots()}
        </div>
    )

}

export default PresentPatientAppt;