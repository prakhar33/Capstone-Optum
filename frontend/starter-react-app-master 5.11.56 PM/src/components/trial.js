import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Provider.css'
import { useEffect ,useState} from "react";
import Table from 'react-bootstrap/Table';
function Provider(){
  const userdata=JSON.parse(localStorage.getItem("auth"));
  const [appointments,setAppointments] = useState([]);
  
  const fun = ( )=>{
    localStorage.clear();
    console.log("Cleared Storage");
  }
console.log(userdata);
  
  const getproviderappointments = () =>{
     fetch(`/bookings/getProviderBookings?provider_id=${userdata.provider_id}`).then(response =>{
       return response.json();
     }).then(data=>{
       setAppointments(data);
     })

    console.log(appointments);
  }
   useEffect(() =>{
        getproviderappointments();
   },[]);


  function RenderingArrayOfObjects(){
   if(appointments.length>0){
    const tableRows=appointments.map(
        (element)=>{
            return(
              <tr>
                <td>{element.customer_name}</td>
                <td>{element.customer_id}</td>
                <td>{element.customer_address}</td>
                <td>{element.date[0]}-{element.date[1]}-{element.date[2]}</td>
                <td>{element.start_time}</td>
                <td>{element.end_time}</td>
                <td>{element.service_name}</td>
                <td>{element.charge}</td>
                <td>{element.status}</td>
               
              </tr>
                
            )
        }
    )
    return(
        <div>
            
          <Table hover>
              <thead>
                <tr>    
                  <th>Customer Name</th>
                  <th>Phone No.</th>
                  <th>Address</th>
                  <th >Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Service</th>
                  <th>Charges</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>      
            
        </div>
    )

   }
    else{
      return (
          <h2>Nothing to Show</h2>
      )
    }
  }



   return (
       
      
        <>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-light" href="#">Home Services</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>



 <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-light" href="/providerhome">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="/ProviderProfile">My Profile</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link text-light" href="/login" onClick={fun} >Logout</a>
      </li>
    </ul>
    
  </div>

</nav>




<div className="bg-img"></div>




  <div className="searchclass" id="prov">
            <div className="App">
                  <div>
                  <br />
                    <h1 style={{ color: 'yellow' }}>Welcome  to Home Services</h1>
                    <h2>Your Appointments:</h2>
                    
              
                    <br />
                    <RenderingArrayOfObjects />
                    
                  </div>
                </div>
</div>
        </>
    )
}



export default Provider;