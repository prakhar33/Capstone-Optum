import React,{useState, useEffect} from "react";
import axios from "axios";
import signupimage from '../images/doctor_signup.png'
import {useNavigate } from 'react-router-dom';
import HospitalService from "../services/HospitalService";
import SlotToTime from "../services/SlotToTime";


const ListHospitalComponenet = (props) => {
    const [patientAppts, setPatientAppts] = useState([]);
    useEffect(() => {
        HospitalService.getHospitalByName(localStorage.getItem('hospitalName')).then((res) => {
            setPatientAppts(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])


    return (
        <div>
            <center><h2>Hospital Appointment List</h2></center>
                <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
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
                            <tr key={patientAppt[0]}>
                                <td >{patientAppt[0]}</td>
                                <td >{patientAppt[1]}</td>
                                <td >{patientAppt[2]}</td>
                                <td >{patientAppt[3]}</td>
                                <td >{SlotToTime(patientAppt[4]).start}</td>
                                <td >{SlotToTime(patientAppt[4]).end}</td>
                                <td >{patientAppt[6]}</td>
                                <td >{patientAppt[5]}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
        </div>
    )
}
export default ListHospitalComponenet;