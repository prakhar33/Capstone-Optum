import React,{useState, useEffect} from "react";
import axios from "axios";
import signupimage from '../images/doctor_signup.png'
import {useNavigate } from 'react-router-dom';
import DoctorService from "../services/DoctorService";
import SlotToTime from "../services/SlotToTime";


const ListDoctorComponenet = (props) => {
    const [patientAppts, setPatientAppts] = useState([]);
    useEffect(() => {
        DoctorService.getDoctorByID(localStorage.getItem('doctorId')).then((res) => {
            setPatientAppts(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])


    return (
        <div>
            <center><h2>Doctor Appointment List</h2></center>
                <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Hospital Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientAppts?.map(
                            patientAppt=>
                            <tr key={patientAppt.appointment_id}>
                                <td >{patientAppt.appointment_id}</td>
                                <td >{patientAppt.hospital_name}</td>
                                <td>{ SlotToTime(patientAppt.slot).start}</td>
                                <td>{ SlotToTime(patientAppt.slot).end}</td>
                                <td>{patientAppt.date}</td>
                                <td>{patientAppt.city}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
        </div>
    )
}
export default ListDoctorComponenet;