import React from "react";
import { Card } from "react-bootstrap";
import {default as yogaimg} from '../images/YOGA_IMAGE_1.jpg';
import {default as fitnessimg} from '../images/FITNESS_IMAGE_3.jpg';
import { FaChevronRight } from "react-icons/fa";
import {default as lifestyle} from '../images/FIT_FOR_YOUR_LIFESTYLE.jpg';
import {default as everyspace} from '../images/FOR_EVERY_SPACE_AT_ANY_PACE.jpg';
import {default as mindfulness} from '../images/MINDFULNESS_IMAGE_2.jpg';
import {default as therapist} from '../images/THERAPIST_IMAGE.jpg';
import {default as booksimg} from '../images/BOOKS_IMG.png';
import { Link } from "react-router-dom";

function Homepage2(){
    return(
    <>
        <h1 style={{textAlign:"center", paddingTop:"5rem", fontWeight:"bolder"}}>FIND WHAT MOVES YOU.</h1>
        <p style={{textAlign:"center", padding:"0 25rem 0 25rem", fontSize:"1.2rem", marginBottom:"3.5rem"}}>Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind, and spirit.</p>
      
      <div style={{marginLeft:"5rem", display:"flex"}}>
      <Link to='/yoga' style={{color:"black"}} className='nav-link'>
      <Card style={{ width: '20rem', textAlign:"center", backgroundColor:"#F7FBFC", border:"none"}}>
      <Card.Body>
            <img style={{height:"166.64px", width:"296.25px", marginLeft:"0rem"}} src={yogaimg} />
        <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"1rem", fontSize:"1.2rem", textAlign:"left"}}>YOGA <FaChevronRight /> </Card.Subtitle>
        <Card.Text style={{textAlign:"left"}}> 
        From Ashtanga to Vinyasa, make mindful movement a daily ritual.
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
      
      <Link to='/books' style={{color:"black"}} className='nav-link'>
      <Card style={{ marginLeft:"1.5rem" ,width: '20rem', textAlign:"center", backgroundColor:"#F7FBFC", border:"none"}}>
      <Card.Body>
            <img style={{height:"166.64px", width:"296.25px", marginLeft:"0rem"}} src={booksimg} />
        <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"1rem", fontSize:"1.2rem", textAlign:"left"}}>BOOKS <FaChevronRight /> </Card.Subtitle>
        <Card.Text style={{textAlign:"left"}}> 
        Scroll through a variety of books that picks your interest.
        </Card.Text>
      </Card.Body>
    </Card></Link>
      
      <Link to='/meditation' style={{color:"black"}} className='nav-link'>
      <Card style={{ marginLeft:"1.5rem" ,width: '20rem', textAlign:"center", backgroundColor:"#F7FBFC", border:"none"}}>
      <Card.Body>
            <img style={{height:"166.64px", width:"296.25px", marginLeft:"0rem"}} src={mindfulness} />
        <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"1rem", fontSize:"1.2rem", textAlign:"left"}}>MEDITATION <FaChevronRight /> </Card.Subtitle>
        <Card.Text style={{textAlign:"left"}}> 
        Find meditations for relaxation, creativity, and restful sleep.
        </Card.Text>
      </Card.Body>
    </Card></Link>
      
      <Link to='/appointments' style={{color:"black"}} className='nav-link'>
      <Card style={{ marginLeft:"1.5rem" ,width: '20rem', textAlign:"center", backgroundColor:"#F7FBFC", border:"none"}}>
      <Card.Body>
            <img style={{height:"166.64px", width:"296.25px", marginLeft:"0rem"}} src={therapist} />
        <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"1rem", fontSize:"1.2rem", textAlign:"left"}}>THERAPY <FaChevronRight /> </Card.Subtitle>
        <Card.Text style={{textAlign:"left"}}> 
        Find meditations for relaxation, creativity, and restful sleep.
        </Card.Text>
      </Card.Body>
    </Card></Link>
    </div>

    <div style={{display:"flex", marginTop:"10rem"}}>
    <div>
    <h1 style={{marginTop:"4rem", marginRight:"14rem", marginLeft:"6rem", fontWeight:"bold"}}>FIT FOR YOUR LIFESTYLE</h1>
    <p style={{paddingLeft:"6rem", paddingRight:"10rem", fontSize:"1.5rem"}}>Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.</p>
    </div>
    <img src={lifestyle} style={{width:"844.8px", height:"475.2px", float:"right"}} />
    </div>

    <div style={{display:"flex", marginTop:"12rem"}}>
    <img src={everyspace} style={{width:"844.8px", height:"475.2px"}} />
    <div>
    <h1 style={{marginTop:"4rem", marginLeft:"10rem", marginRight:"6rem", fontWeight:"bold"}}>FOR EVERY SPACE, AT ANY PACE</h1>
    <p style={{paddingRight:"6rem", paddingLeft:"10rem", fontSize:"1.5rem"}}>From the comfort of your living room to a hotel room across the globe, we put the best classes at your fingertips.</p>
    </div>
    
    </div>
    </>    
    );
}

export default Homepage2;