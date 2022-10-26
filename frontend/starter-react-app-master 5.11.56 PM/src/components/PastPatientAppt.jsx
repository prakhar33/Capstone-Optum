import React, { Component, useEffect, useState, useRef } from 'react';
import PatientService from '../services/PatientService';
import SlotToTime from '../services/SlotToTime';

const PastPatientAppt = (props) => {
    const [patientAppts, setPatientAppts] = useState([]);


    useEffect(() => {
        PatientService.getAllPatientAppts(localStorage.getItem('patientId')).then((res) => {
            var temp = [];
            for(let i=0; i<res.data.length;i++) {
                var currentDate = new Date();
                var parts =res.data[i][6].split('-');
                var mydate = new Date(parts[2], parts[1] - 1, parts[0]); 
                console.log("appt date", mydate);
                console.log("current date",currentDate);
                if(mydate<currentDate) {
                    temp.push(res.data[i]);
                }
            }
            setPatientAppts(temp);
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

export default PastPatientAppt;