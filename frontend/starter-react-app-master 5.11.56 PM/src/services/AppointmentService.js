import axios from "axios"

// const DeleteDoctorAppointment_URL = "http://localhost:8080/doctor/deleteAppt/";
const DeletePatientAppointment_URL = "http://localhost:8080/patient/deleteAppt/";
// const EditDoctorAppointment_URL = "";
const EditPatientAppointment_URL = "http://localhost:8080/patient/editAppt/";

class AppointmentService{
    deletePatientAppt(id){
        return axios.delete(DeletePatientAppointment_URL+id);
    }
    // deleteDoctorAppt(id){
    //     return axios.get(DeleteDoctorAppointment_URL+id);
    // }
    editPatientAppt(body){
        return axios.put(EditPatientAppointment_URL, body );
    }
    // editDoctorAppt(id){
    //     return axios.get(EditDoctorAppointment_URL+id);
    // }
}
export default new AppointmentService()