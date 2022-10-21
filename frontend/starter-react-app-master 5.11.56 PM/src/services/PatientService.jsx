import axios from "axios"

const Patient_BASE_URL = "http://localhost:9090/patient/";

class PatientService{
    getAllPatientAppts(id){
        return axios.get(Patient_BASE_URL+"viewapps/"+id);
    }

    getDocById(id){
        return axios.get("http://localhost:9090/doctor/"+"getDocByID/"+id);
    }

    getSlotsByDateAndId(id,date) {
        return axios.get(
            'http://localhost:9090/appointment/getslotbydate/'+date+"/"+id
            )
    }
}
export default new PatientService()