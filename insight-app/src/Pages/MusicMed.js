import React from "react";
import Meditation from "./MeditationHomePage";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
export default function MusicMeditation(){
    return(
        <main>
            <Meditation />

            <h1 style={{textAlign:"center", marginBottom:"2rem"}}>CLASSICAL MUSIC FOR MEDITATION</h1>
            <div style={{display:"flex", marginLeft:"11rem"}}>
            <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=0Tmo3KIH31c' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>4 Hours Classical Music for Relaxation</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://youtu.be/9HQWrjXtpBA' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>Samadhi – Indian Music for Meditation</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=LIg6KxXvc1Q' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>4 Hours Classical Music for Relaxation & Concentration</Card.Title>
            </Card.Body>
            </Card>
            </div>

            <h1 style={{textAlign:"center", marginBottom:"2rem", marginTop:"6rem"}}>NATURE SOUNDS FOR MEDITATION</h1>
            <div style={{display:"flex", marginLeft:"11rem"}}>
            <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=WZKW2Hq2fks' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>3 Hour Meditation Music: Nature Sounds, Healing Music</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=lE6RYpe9IT0' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>Relaxing Music with Nature Sounds - Waterfall</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=LIg6KxXvc1Q' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>4 Hours Classical Music for Relaxation & Concentration</Card.Title>
            </Card.Body>
            </Card>
            </div>

            <h1 style={{textAlign:"center", marginBottom:"2rem", marginTop:"6rem"}}>CHANTS FOR MEDITATION</h1>
            <div style={{display:"flex", marginLeft:"11rem", marginBottom:"4rem"}}>
            <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=W-hrBhA4XkM' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>Gregorian Chants at 432Hz</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=8sYK7lm3UKg' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>OM Chanting @417 Hz | Removes All Negative Blocks</Card.Title>
            </Card.Body>
            </Card>

            <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=cDCS19EOsrA' controls='true' width='22rem' height='25rem'/>
            <Card.Body>
            <Card.Title>Buddhist Thai Monks Chanting Healing Mantra</Card.Title>
            </Card.Body>
            </Card>
            </div>
        </main>
    );
}