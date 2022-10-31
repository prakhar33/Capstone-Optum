import React, { Component } from 'react';
import DoctorService from '../services/DoctorService';

class ListDoctorComponent extends Component {
    constructor(props){
        super(props)
        this.logged=localStorage.getItem("Login");
        this.state = {
            doctors: []
        }
        
    }
    
    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
                this.setState({doctors: res.data});
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    
    render() {
        return (
            <div>

            
            {this.logged==='1'?
            
            
            <div>
                <center><h2>Doctors List</h2></center>
                <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Hospital Name</th>
                        <th>City</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state?.doctors?.map(
                            doctor=>
                            <tr key={doctor.doctor_id}>
                                <td >{doctor.doctor_id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.hospitalName}</td>
                                <td>{doctor.city}</td>
                                <td>{doctor.start_time}</td>
                                <td>{doctor.end_time}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>:<div>Cant open
                </div>
    }
                </div>
        );
    }
}

export default ListDoctorComponent;