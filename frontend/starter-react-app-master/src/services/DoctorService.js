import axios from "axios"

const DOCTOR_BASE_URL="http://localhost:9090/doctor";
class DoctorService{
    getDoctorAppintmentsbyID(id){
        return axios.get(DOCTOR_BASE_URL+"/viewapps/"+id);
    }
}
export default new DoctorService()