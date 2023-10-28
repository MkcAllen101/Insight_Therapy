import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const ThCards = ({name, speciality, address, phone_no})=> {

  return (
    <div>
          <Card style={{ width: '20rem', height:"280px", marginRight:"1rem", marginBottom:"1rem"}}>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>

            <Card.Body>
            <Card.Title style={{paddingTop:"1rem"}}>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{speciality}</Card.Subtitle>
            <br />
            <Card.Subtitle className="mb-2 text-muted"><b>Address :</b> {address}</Card.Subtitle>
            <br />
            <Card.Subtitle className="mb-2 text-muted">{phone_no}</Card.Subtitle>
            </Card.Body>
            </div>
          </Card>
    </div>
  );
}
export default ThCards;