import React, { Component, useEffect, useState, useRef } from 'react';
import PatientService from '../services/PatientService';
import SlotToTime from '../services/SlotToTime';
import AppointmentService from '../services/AppointmentService';
import DatePicker from "react-datepicker";

const ViewPatientApp = (props) => {
    const [patientAppts, setPatientAppts] = useState([]);


    useEffect(() => {
        PatientService.getAllPatientAppts(localStorage.getItem('patientId')).then((res) => {
            setPatientAppts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

  
    return (
        <div>
            <center><h2>Patient Appointment List</h2></center>
                <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Hospital Name</th>
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
                                <td>{patientAppt[3]}</td>
                                <td>{ SlotToTime(patientAppt[4]).start}</td>
                                <td>{ SlotToTime(patientAppt[4]).end}</td>
                                <td>{patientAppt[6]}</td>
                                <td>{patientAppt[5]}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
        </div>
    )

}

export default ViewPatientApp;