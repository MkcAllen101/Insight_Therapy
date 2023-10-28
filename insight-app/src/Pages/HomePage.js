import React from "react";
import FeatureCard from "../components/Features";
import Review from "../components/ReviewSection";
import Homepage2 from "./HomePage2";

function Home(){
    return(
    <>
      <div className='BGimage   '>
      <h1 className='quote' style={{textAlign:"center", marginTop:"0%", marginBottom:"10%" ,padding:"5% 35%", lineHeight:"3.5rem"}}>Make it your year with Insight Therapy</h1>
      </div>
      {/* <FeatureCard /> */}
      <Homepage2 />
      <h1 style={{textAlign:"center", marginTop:"12rem",color:"grey"}}>Insight Therapy Stories</h1>
      <p style={{textAlign:"center", marginTop:"0.25rem", fontWeight:"bolder"}}>_________________________________________________</p>
      <Review />
      </>
    )
}

export default Home;

