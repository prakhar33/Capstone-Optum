import axios from "axios"

const DOCTOR_BASE_URL="http://localhost:9090/doctor/getAll";
class DoctorService{
    getDoctors(){
        return axios.get(DOCTOR_BASE_URL);
    }
}
export default new DoctorService()