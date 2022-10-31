import axios from "axios"

const HOSPITAL_BASE_URL="http://localhost:9090/hospital";
class HospitalService{
    getHospitalappointmentsbyHid(Hid){
        return axios.get(HOSPITAL_BASE_URL+"/viewapps/"+Hid);
    }

    viewDocByHsptl(Hid)
    {
        return axios.get(HOSPITAL_BASE_URL+"/viewDocByHsptl/"+Hid);
    }
    deleteDoctor(name)
    {
        return axios.delete(HOSPITAL_BASE_URL+"/deleteDoctor/"+name);
    }
    deleteHospital(hospital_id)
    {
        return axios.delete(HOSPITAL_BASE_URL+"/deleteHospital/"+hospital_id);
    }
}
export default new HospitalService()