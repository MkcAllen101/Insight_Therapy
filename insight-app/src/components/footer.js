import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

export default function App() {
  return (
    <MDBFooter className='bg-light text-center' style={{bottom:"0", left:"0", width:"100%", textAlign:"center", right:'0', height:"4rem" }}>
      <MDBContainer className='p-4 pb-0' style={{paddingTop:"0rem"}}>
          <FaFacebookF size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaInstagram size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaTwitter size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaMailBulk size={30} />
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor:"light", marginLeft:"2rem" }}>
        © 2023 Copyright : INSIGHT THERAPY 
      </div>
    </MDBFooter>
  );
}