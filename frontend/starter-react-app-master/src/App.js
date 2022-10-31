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
import SearchByHospitalComponent from './components/SearchByHospitalComponent';
import HomeHeader from './components/HomeHeader';
import CorouselComponent from './components/CorouselComponent';
import Footer from './components/Footer';
import PatientDashboard from './components/PatientDashboard'
import Home from './components/home';
import HospitalLogin from './components/HospitalLogin';
import PatientProfile from './components/PatientProfile';
import PatientViewAppointments from './components/PatientViewAppointments';
import ManageAppointments from './components/ManageAppointmentComponent'
import PastPatientAppt from './components/PastPatientAppt';
import PresentPatientAppt from './components/PresentPatientAppt';
import DoctorDashboard from './components/DoctorDashboard';
import DoctorViewAppointments from './components/DoctorViewAppointments';
import HospitalDashboard from './components/HospitalDashboard';
import HospitalViewAppointments from './components/HospitalViewAppointments';
import HospitalAddDoctor from './components/HospitalAddDoctor';
import HospitalManageDoctor from './components/HospitalManageDoctor';
import AdminDashboard from './components/AdminDashboard';
import AdminViewAppointments from './components/AdminViewAppointments';
import AdminAddDoctor from './components/AdminAddDoctor';
import AdminManageDoctor from './components/AdminManageDoctor';
import DoctorProfile from './components/DoctorProfile';
import HospitalProfile from './components/HospitalProfile';
import AdminAddHospital from './components/AdminAddHospital';
import AdminManageHospital from './components/AdminManageHospital';
function App() {
  return (
    <div>
      <Router>
        <div className='container'>
              <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/doctor/listAllDoctors" element={<ListDoctorComponent/>}> </Route>
                    <Route path="/doctor/signup" element={<DoctorSignUpComponent/>}> </Route>
                    <Route path="/doctor/login" element={<DoctorLoginComponent/>}> </Route>
                    <Route path="/patient/signup" element={<PatientSignUpComponent/>}> </Route>
                    <Route path="/patient/login" element={<PatientLoginComponent/>}> </Route>
                    <Route path="/hospital/signup" element={<HospitalSignUpComponent/>}> </Route>
                    <Route path="/hospital/login" element={<HospitalLogin/>}> </Route>
                    <Route path="/admin/login" element={<AdminLoginComponent/>}> </Route>
                    <Route path="/patient/bookappointment" element={<BookAppointmentComponent/>}> </Route>
                    <Route path="/patient/bookbyhospital" element={<SearchByHospitalComponent/>}> </Route>
                    <Route path="/home/homeheader" element={<HomeHeader/>}> </Route>
                    <Route path="/home/corousel" element={<CorouselComponent/>}> </Route>
                    <Route path="/home/footer" element={<Footer/>}> </Route>
                    <Route path="/patient/dashboard" element={<PatientDashboard/>}> </Route>
                    <Route path="/patient/profile" element={<PatientProfile/>}> </Route>
                    <Route path="/patient/viewappointments" element={<PatientViewAppointments/>}> </Route>
                    <Route path="/patient/manageappointments" element={<ManageAppointments/>}> </Route>
                    <Route path="/patient/pastappointments" element={<PastPatientAppt/>}> </Route>
                    <Route path="/patient/presentappointments" element={<PresentPatientAppt/>}> </Route>
                    <Route path="/doctor/dashboard" element={<DoctorDashboard/>}> </Route>
                    <Route path="/doctor/viewappointments" element={<DoctorViewAppointments/>}> </Route>
                    <Route path="/hospital/dashboard" element={<HospitalDashboard/>}> </Route>
                    <Route path="/hospital/viewappointments" element={<HospitalViewAppointments/>}> </Route>
                    <Route path="/hospital/adddoctor" element={<HospitalAddDoctor/>}> </Route>
                    <Route path="/hospital/managedoctors" element={<HospitalManageDoctor/>}> </Route>
                    <Route path="/admin/dashboard" element={<AdminDashboard/>}> </Route>
                    <Route path="/admin/viewappointments" element={<AdminViewAppointments/>}> </Route>
                    <Route path="/admin/adddoctor" element={<AdminAddDoctor/>}> </Route>
                    <Route path="/admin/managedoctors" element={<AdminManageDoctor/>}> </Route>
                    <Route path="/doctor/profile" element={<DoctorProfile/>}> </Route>
                    <Route path="/hospital/profile" element={<HospitalProfile/>}> </Route>
                    <Route path="/admin/addhospital" element={<AdminAddHospital/>}> </Route>
                    <Route path="/admin/managehospitals" element={<AdminManageHospital/>}> </Route>
                </Routes>
              </div>
        </div>
      </Router>
    </div>
  ); 
  
}

export default App;
