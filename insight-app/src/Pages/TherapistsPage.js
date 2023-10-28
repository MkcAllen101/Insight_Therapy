import React, { useState } from "react";
import therapists from '../components/therapist_data'
import ThCards from "../components/Therapists_Card";
export default function TherapistsPage(){
    
    const [therapist, setTherapist] = useState(therapists);
    return(
        <>
        <div style={{display:"flex", flexDirection:"column"}}>
        <h1 style={{textAlign:"center", marginTop:"2rem", marginBottom:"4rem"}}>Connect with the best online Psychologists</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignContent:"center", marginTop:"1rem"}}>
            {therapist.map((singleTherapist)=>{
                return <ThCards key={singleTherapist.id} {...singleTherapist} />
            })}
        </div>
        </div>
        </>
    );
}