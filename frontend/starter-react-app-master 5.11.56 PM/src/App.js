import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import ListDoctorComponent from './components/ListDoctorComponent';
import DoctorSignUpComponent from './components/DoctorSignUpComponent';
import DoctorLoginComponent from './components/DoctorLoginComponent';
import PatientSignUpComponent from './components/PatientSignUpComponent';
import HospitalSignUpComponent from './components/HospitalSignUpComponent';
import PatientLoginComponent from './components/PatientLoginComponent';
import AdminLoginComponent from './components/AdminLoginComponent';
import BookAppointmentComponent from './components/BookAppointmentComponent';
import ListPatientComponent from './components/PresentPatientAppt';
import HospitalLoginComponent from './components/HospitalLoginComponent';
import ListHospitalComponent from './components/ListHospitalComponent';
import ManageAppointment from './components/ManageAppointmentComponent';
import ViewAppointmentComponent from './components/ViewAppointmentComponent';

function App() {

  return (
    <div>
      <Router>
        <div className='container'>
              <div className="container">
                <Routes>
                    <Route path="/doctor/listAllDoctors" element={<ListDoctorComponent/>}> </Route>
                    <Route path="/doctor/signup" element={<DoctorSignUpComponent/>}> </Route>
                    <Route path="/doctor/login" element={<DoctorLoginComponent/>}> </Route>
                    <Route path="/doctor/apptlist" element={<ListDoctorComponent/>}></Route>
                    <Route path="/patient/signup" element={<PatientSignUpComponent/>}> </Route>
                    <Route path="/patient/login" element={<PatientLoginComponent/>}> </Route>
                    <Route path="/patient/apptlist" element={<ListPatientComponent/>}></Route>
                    <Route path="/hospital/signup" element={<HospitalSignUpComponent/>}> </Route>
                    <Route path="/hospital/login" element={<HospitalLoginComponent/>}> </Route>
                    <Route path="/hospital/apptlist" element={<ListHospitalComponent/>}></Route>                    
                    <Route path="/admin/login" element={<AdminLoginComponent/>}> </Route>
                    <Route path="/patient/bookappointment" element={<BookAppointmentComponent/>}> </Route>
                    <Route path="/patient/manageAppt" element={<ManageAppointment/>}> </Route>
                    <Route path="/patient/viewAppt" element={<ViewAppointmentComponent/>}> </Route>
                </Routes>
              </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
