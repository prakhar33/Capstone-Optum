import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Loginn =(props)=> {
    
    const [Username , setName] = useState('');
    const [password , setPassword] = useState('');
    const [Logged , setLogged]=useState('');
    
    const navigate=useNavigate()

    const handleUsername=(e)=> {
        setName(e.target.value)
      }
  
    const handlePassword=(e)=> {
          setPassword(e.target.value);
      }

    const handleSubmit=(e)=> {
        //   alert('A name was submitted: ' + this.state.name);
          const axios = require('axios').default;
    
          axios.post('http://127.0.0.1:9090/patient/login', {
              username: Username,
              password: password,
          })
          .then((res) => {
              
              if(res.data==="Login Successful"){
                  
                setLogged(1);
                
              }
              else{
                  console.log("NOO!!")
              }
          })
          .catch((err) => {
              console.log(err);
          });

           e.preventDefault();
           
        }

        useEffect(()=>{
            if(Logged===1){
                props.data(Logged);
                navigate("/register_p");
            }
        },[Logged])
    
        return (
            <div>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
          <label>
            Username:
            <input type="text" value={Username} onChange={(e)=>{handleUsername(e)}} />
          </label>
          <br></br>
          
          <label>
            password:
            <input type="text" value={password} onChange={(e)=>{handlePassword(e)}} />
          </label>
          
          <br></br>
          <input type="submit" value="Submit" />

        </form>
            </div>
        );
    }

export default Loginn;
