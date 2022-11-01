import React,{useEffect, useState} from "react";
import { ReactDOM } from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';
import AdminLoginComponent from "./AdminLoginComponent";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import ListDoctorComponent from "./ListDoctorComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/bookappointment.css'


const SearchByHospitalComponent=()=>{
      const [specialization , setspecialization] = useState('');
      const [doc , setDoc] = useState('');
      const [selecteddate, setStartDate] = useState(new Date());
      const [selectedslot, setselectedslot] = useState(0);

      const [fetchedhospitals , setfetchedhospitals] = useState([]);
      const [selectedhospital, setselectedhospital] = useState();
      const [fetcheddoctors , setfetcheddoctors] = useState([]);

    //   const navigate=useNavigate();
    const handleSpecialization=(e)=> {
        setspecialization(e.target.value)
    }
    
    
    useEffect(()=>{
        const axios = require('axios').default;
        //alert("Hi");
        axios.get('http://localhost:9090/hospital/getAll')
      .then((res) => {
          console.log("hello");
         setfetchedhospitals(res.data);
                  
      })
      .catch((err) => {
          console.log(err);
      });
    },[]);
    const handleSlot=(slot)=> {
        setselectedslot(slot)
    }
    console.log(fetchedhospitals);
    //selectedslot=parseInt(selectedslot);
    console.log("selected slot",selectedslot);
    console.log("selected Date",selecteddate);
    let datetosend="";
    datetosend=selecteddate.getDate().toString()+"-"+(selecteddate.getMonth()+1).toString()+"-"+selecteddate.getFullYear().toString(); 
    console.log("date",typeof(datetosend));
    console.log("slot",typeof(selectedslot));
    console.log("Selected Hospital",selectedhospital);
    // console.log("did",typeof(doc.doctor_id));
    // console.log("pid",typeof(5));
    // console.log("hname",typeof(doc.hospitalName));
    // console.log("citytype",typeof(doc.city));
    // console.log("date",datetosend);
    //console.log(Object.keys(selecteddate));



    function onBook(selected_doctor_index){
        const currentDoctorId = fetcheddoctors[selected_doctor_index].doctor_id;
        const axios = require('axios').default;
        axios.get(
            'http://localhost:9090/appointment/getslotbydate/'+datetosend+"/"+currentDoctorId
            )
        .then((res) => {

            const obj = fetcheddoctors[selected_doctor_index];
            if(obj){
 
                for(let i=0;i<res.data.length;i++)
                { 
                    if(res.data[i]===1) obj.slot_1=2;
                    if(res.data[i]===2) obj.slot_2=2;
                    if(res.data[i]===3) obj.slot_3=2;
                    if(res.data[i]===4) obj.slot_4=2;
                    if(res.data[i]===5) obj.slot_5=2;
                    if(res.data[i]===6) obj.slot_6=2;
                    if(res.data[i]===7) obj.slot_7=2;
                    if(res.data[i]===8) obj.slot_8=2;
                    if(res.data[i]===9) obj.slot_9=2;
                    if(res.data[i]===10) obj.slot_10=2;
                    if(res.data[i]===11) obj.slot_11=2;
                    if(res.data[i]===12) obj.slot_12=2;
                    if(res.data[i]===13) obj.slot_13=2;
                    if(res.data[i]===14) obj.slot_14=2;
                    if(res.data[i]===15) obj.slot_15=2;
                    if(res.data[i]===16) obj.slot_16=2;
                    if(res.data[i]===17) obj.slot_17=2;
                    if(res.data[i]===18) obj.slot_18=2;
                    if(res.data[i]===19) obj.slot_19=2;
                    if(res.data[i]===20) obj.slot_20=2;
                }
                
                setDoc(obj);
             } 
         
        }
      )
      .catch((err) => {
          console.log(err);
      });
    }
    
    const confirmAppointment=(e)=> {
        const axios = require('axios').default;
        //alert("Hi");
        axios.post(
            'http://localhost:9090/patient/Book',
            {
                doctor_id:doc.doctor_id,
                patient_id:5,
                hospital_name:doc.hospitalName,
                slot:selectedslot,
                city:doc.city,
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
      //e.preventDefault();
    }

    function Availabity() {
        // console.log(fetcheddoctors);
        // console.log(selected_doctor_index);
        // console.log('slot 6',fetcheddoctors[selected_doctor_index].slot_6);
        // console.log(flag);
        if(!doc){
            return null;
        }
        else{
        return(
            <div>
                {/* <h2>{props.fetcheddoctors}</h2> */}
                <center><h2>Available Slots of Dr. {doc.name}.</h2></center>
                <table className="table table-striped table-light">
                <tbody >
                    {
                        <div >
                            <tr>
                                <td><button onClick={()=>setselectedslot("1")} style={{backgroundColor: doc.slot_1===0?"white": doc.slot_1===1?"green":"red",}} disabled = {doc.slot_1===2 || doc.slot_1===0}>10AM -10:30AM</button></td>
                                <td><button onClick={()=>setselectedslot("2")} style={{backgroundColor: doc.slot_2===0?"white": doc.slot_2===1?"green":"red",}} disabled = {doc.slot_2===2 || doc.slot_2===0} >10:30AM -11:00AM</button></td>
                                <td><button onClick={()=>setselectedslot("3")} style={{backgroundColor: doc.slot_3===0?"white": doc.slot_3===1?"green":"red",}} disabled = {doc.slot_3===2 || doc.slot_3===0}>11AM -11:30AM</button></td>
                                <td><button onClick={()=>setselectedslot("4")} style={{backgroundColor: doc.slot_4===0?"white": doc.slot_4===1?"green":"red",}} disabled = {doc.slot_4===2 || doc.slot_4===0}>11:30AM -12:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("5")} style={{backgroundColor: doc.slot_5===0?"white": doc.slot_5===1?"green":"red",}} disabled = {doc.slot_5===2 || doc.slot_5===0}>12PM -12:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("6")} style={{backgroundColor: doc.slot_6===0?"white": doc.slot_6===1?"green":"red",}} disabled = {doc.slot_6===2 || doc.slot_6===0}>12:30PM -01:00AM</button></td>
                                <td><button onClick={()=>setselectedslot("7")} style={{backgroundColor: doc.slot_7===0?"white": doc.slot_7===1?"green":"red",}} disabled = {doc.slot_7===2 || doc.slot_7===0}>01:00PM -01:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("8")} style={{backgroundColor: doc.slot_8===0?"white": doc.slot_8===1?"green":"red",}} disabled = {doc.slot_8===2 || doc.slot_8===0}>01:30PM -02:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("9")} style={{backgroundColor: doc.slot_9===0?"white": doc.slot_9===1?"green":"red",}} disabled = {doc.slot_9===2 || doc.slot_9===0}>02:00PM -02:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("10")} style={{backgroundColor: doc.slot_10===0?"white": doc.slot_10===1?"green":"red",}} disabled = {doc.slot_10===2 || doc.slot_10===0}>2:30PM -03:00PM</button></td>
                           </tr>
                           <br></br>
                           <tr>
                                <td><button onClick={()=>setselectedslot("11")} style={{backgroundColor: doc.slot_11===0?"white": doc.slot_11===1?"green":"red",}} disabled = {doc.slot_11===2 || doc.slot_11===0}>03:00PM -03:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("12")} style={{backgroundColor: doc.slot_12===0?"white": doc.slot_12===1?"green":"red",}} disabled = {doc.slot_12===2 || doc.slot_12===0}>03:30PM -04:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("13")} style={{backgroundColor: doc.slot_13===0?"white": doc.slot_13===1?"green":"red",}} disabled = {doc.slot_13===2 || doc.slot_13===0}>04:00PM -04:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("14")} style={{backgroundColor: doc.slot_14===0?"white": doc.slot_14===1?"green":"red",}} disabled = {doc.slot_14===2 || doc.slot_14===0}>04:30PM -05:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("15")} style={{backgroundColor: doc.slot_15===0?"white": doc.slot_15===1?"green":"red",}} disabled = {doc.slot_15===2 || doc.slot_15===0}>05:00PM -05:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("16")} style={{backgroundColor: doc.slot_16===0?"white": doc.slot_16===1?"green":"red",}} disabled = {doc.slot_16===2 || doc.slot_16===0}>05:30PM -06:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("17")} style={{backgroundColor: doc.slot_17===0?"white": doc.slot_17===1?"green":"red",}} disabled = {doc.slot_17===2 || doc.slot_17===0}>06:00PM -06:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("18")} style={{backgroundColor: doc.slot_18===0?"white": doc.slot_18===1?"green":"red",}} disabled = {doc.slot_18===2 || doc.slot_18===0}>06:30PM -07:00PM</button></td>
                                <td><button onClick={()=>setselectedslot("19")} style={{backgroundColor: doc.slot_19===0?"white": doc.slot_19===1?"green":"red",}} disabled = {doc.slot_19===2 || doc.slot_19===0}>07:00PM -07:30PM</button></td>
                                <td><button onClick={()=>setselectedslot("20")} style={{backgroundColor: doc.slot_20===0?"white": doc.slot_20===1?"green":"red",}} disabled = {doc.slot_20===2 || doc.slot_20===0}>07:30PM -08:00PM</button></td>
                            </tr>
                        </div>
                        
                    }
                </tbody>
                </table>
                
                
                <button style={{marginTop:"20px"}} class="btn btn-primary" onClick={confirmAppointment}>Confirm Appointment</button>
            </div>
         );
       }
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
                 <DatePicker dateFormat="dd MMMM, yyyy" selected={selecteddate} onChange={(date:Date) => setStartDate(date)} />
                 <table className="table table-striped table-light" style={{border:"3px solid gray",marginTop:"20px"}}>
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
        //  else{
        //    return (
        //        <h3>Sorry, No doctors available with selected Specialization</h3>
        //    )
        //  }
       }
    
    const handleSubmit=(e)=> {
        
        const axios = require('axios').default;
        //console.log(specialization);
        axios.post(
            'http://localhost:9090/doctor/getByHosp/'+selectedhospital, )
      .then((res) => {
          //console.log("hello");
          setfetcheddoctors(res.data);
          //console.log(fetcheddoctors[0]);
          if(res.data.length===0){
            alert("Sorry...! No doctors available in selected Hospital");
        }
      })
      .catch((err) => {
          console.log(err);
      });
      e.preventDefault();
    }
    
      return (
          <div>
          {localStorage.getItem("Plogin")==='1' ?
    <div id="formdiv">
        <form id="doctorRegistrationform" class="row row-cols-lg-12 g-3 align-items-center my-form" onSubmit={(e)=>{handleSubmit(e)}}>
            <h2 >Book Appointment with Particular Hospital</h2>


        <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">Hospital</label>
                <select class="form-select" id="inlineFormSelectPref" onChange={(e) => setselectedhospital(e.target.value)}>
                    {
                        fetchedhospitals.map((hospital) => {
                            
                            return <option value={hospital.hospital_name}>{hospital.hospital_name}</option>;
                        })
                    }
                </select>
        </div>

           
        
        <div class="col-12">
            <button type="submit" class="btn btn-primary my-button" >Get Doctors of {selectedhospital} hospital</button>
            </div>
        </form>
           <div style={{marginTop:"40px"}}>
                <RenderingArrayOfObjects />
            </div>
            <div style={{marginTop:"40px"}}>
         <Availabity />
            </div>
          
                    
            
        </div>:<Navigate replace to="/patient/login"></Navigate> 
}
        </div>
      );
    
}
export default SearchByHospitalComponent;

