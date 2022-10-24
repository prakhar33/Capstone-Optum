import axios from "axios"

const DOCTOR_BASE_URL="http://localhost:8080/doctor";
class DoctorService{
    getDoctorByID(id){
        return axios.get(DOCTOR_BASE_URL+"/viewapps/"+id);
    }
}
export default new DoctorService()