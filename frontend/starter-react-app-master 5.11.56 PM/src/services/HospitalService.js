import axios from "axios"

const HOSPITAL_BASE_URL="http://localhost:8080/hospital";
class HospitalService{
    getHospitalByName(name){
        return axios.get(HOSPITAL_BASE_URL+"/viewapps/"+name);
    }
}
export default new HospitalService()