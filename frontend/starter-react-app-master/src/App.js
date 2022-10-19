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
//import PatientDashboard from './components/PatientDashboard'
import Home from './components/home';
import HospitalLogin from './components/HospitalLogin';
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
                    {/* <Route path="/patient/dashboard" element={<PatientDashboard/>}> </Route> */}
                </Routes>
              </div>
        </div>
      </Router>
    </div>
  ); 
  
}

export default App;
