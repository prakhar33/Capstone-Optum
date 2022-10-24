import axios from "axios"

const Patient_BASE_URL = "http://localhost:8080/patient/";

class PatientService{
    getAllPatientAppts(id){
        return axios.get(Patient_BASE_URL+"viewapps/"+id);
    }

    getDocById(id){
        return axios.get("http://localhost:8080/doctor/"+"docByID/"+id);
    }

    getSlotsByDateAndId(id,date) {
        return axios.get(
            'http://localhost:8080/appointment/getslotbydate/'+date+"/"+id
            )
    }
}
export default new PatientService()