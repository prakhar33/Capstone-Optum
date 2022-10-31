import React,{useState} from "react";
import axios from "axios";
const NameForm=()=>{
    
      
    
      const [name , setName] = useState('');
      const [age , setAge] = useState('');
      const [gender , setGender] = useState('');
      const [bloodGroup , setBloodGroup] = useState('');
      const [mobileNumber , setMobileNumber] = useState('');
      const [city , setCity] = useState('');
      const [password , setPassword] = useState('');

     
    
  
    const handleName=(e)=> {
      setName(e.target.value)
    }

    const handleAge=(e)=> {
        setAge(e.target.value);
    }
    const handleGender=(e)=> {
        setGender(e.target.value);
    }
    const handleBloodGroup=(e)=> {
        setBloodGroup(e.target.value);
    }
    const handleMobileNumber=(e)=> {
        setMobileNumber(e.target.value);
    }
    const handleCity=(e)=> {
        setCity(e.target.value);
    }
    const handlePassword=(e)=> {
        setPassword(e.target.value);
    }
  
    const handleSubmit=(e)=> {
        // console.log("Submitted");
    //   alert('A name was submitted: ' + this.state.name);

      const axios = require('axios').default;

      axios.post('http://127.0.0.1:9090/patient/add', {
          name:name,
          age: age,
          gender: gender,
          bloodGroup:bloodGroup,
          mobileNumber: mobileNumber,
          city: city,
          password: password,
      })
      .then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
      e.preventDefault();
    }
  
    
      return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e)=>{handleName(e)}} />
          </label>
          <br></br>
          <label>
            age:
            <input type="text" value={age} onChange={(e)=>{handleAge(e)}} />
          </label>
          <br></br>
          <label>
            gender:
            <input type="text" value={gender} onChange={(e)=>{handleGender(e)}} />
          </label>
          <br></br>
          <label>
            bloodGroup:
            <input type="text" value={bloodGroup} onChange={(e)=>{handleBloodGroup(e)} }/>
          </label>
          <br></br>
          <label>
            mobileNumber:
            <input type="text" value={mobileNumber} onChange={(e)=>{handleMobileNumber(e)}} />
          </label>
          <br></br>
          <label>
            city:
            <input type="text" value={city} onChange={(e)=>{handleCity(e)}} />
          </label>
          <br></br>
          <label>
            password:
            <input type="text" value={password} onChange={(e)=>{handlePassword(e)} }/>
          </label>
          
          <br></br>
          <input type="submit" value="Submit" />

        </form>
      );
    
      }
export default NameForm;