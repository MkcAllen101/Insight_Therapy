import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

    function Signup() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        await signup(email, password);

        console.log(email, password)
    }
  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer fluid className="p-3 my-5">

      
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <div style={{paddingTop:"5.5rem"}}> 
        <div style={{paddingRight:"10rem", paddingLeft:"10rem"}}> 
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          /></div>

        <div style={{display:"flex", justifyContent:"center"}}>
        <button disabled={isLoading} style={{backgroundColor:"black", color:"white", paddingLeft:"3rem", paddingRight:"3rem", fontSize:"1.5rem", paddingTop:"1.15rem", paddingBottom:"1.15rem", borderRadius:"2.5rem"}}>Sign Up</button></div>
        {error && <div style={{display:"flex", justifyContent:"center", marginTop:"1.5rem", color:"red", fontSize:"1.05rem"}}>{error}</div>}
        </div>
        </MDBCol>

      </MDBRow>
      
    </MDBContainer></form>
  );
}

export default Signup;