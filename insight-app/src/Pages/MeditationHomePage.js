import React from "react";
import ReactPlayer from "react-player";
import Card from 'react-bootstrap/Card';
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

function Meditation(){
    return(
        <>
        <main style={{marginBottom:"6rem"}}>
            <h1 style={{textAlign:"center", fontWeight:"bold",marginTop:"2rem"}}>MEDITATION</h1>
            <p style={{textAlign:"center", padding:"1rem 30rem 1rem 30rem", fontSize:"1.2rem"}}>Mindfulness training isn’t limited to meditation, but it’s a great place to start. Meditation is both a skill and an experience that can positively impact your overall health and happiness.</p>

            <h1 style={{textAlign:"center", fontWeight:"bold",marginTop:"2rem"}}>MEDITATION IS A SKILL...</h1>
            <p style={{textAlign:"center", padding:"1rem 30rem 1rem 30rem", fontSize:"1.2rem", marginBottom:"4rem"}}>Learning to meditate is like learning any other skill. Think of it like exercising a muscle that you’ve never really worked out before. It takes consistent practice to get comfortable. And it’s usually easier if you have a teacher. We’ve got you covered there.</p> 
            
            <div style={{display:"flex", flexDirection:"column"}} >
            <Link to='/meditation/guided' style={{marginLeft:"40%", marginRight:"auto", border:"solid black 2px", textDecoration:"none", color:"white", backgroundColor:"black", padding:"0.5rem 5rem 0.5rem 5rem", fontSize:"2rem", borderRadius:"2rem"}}>GUIDED</Link>

            <Link to='/meditation/music' style={{marginTop:"1rem",marginLeft:"40%", marginRight:"auto", border:"solid black 2px", textDecoration:"none", color:"white", backgroundColor:"black", padding:"0.5rem 5.7rem 0.5rem 5.7rem", fontSize:"2rem", borderRadius:"2rem"}}>MUSIC</Link>
            </div>
        </main>
        </>
    );
}

export default Meditation;