    import React from "react";
    import Meditation from "./MeditationHomePage";
    import { Card } from "react-bootstrap";
    import ReactPlayer from "react-player";

    export default function GuidedMeditation(){
        return(
        <>
        <Meditation />
        <h1 style={{textAlign:"center", marginTop:"2rem", fontWeight:"bolder", marginBottom:"2rem"}}>GUIDED MEDITATION FOR BEGINNERS</h1>
        <div style={{marginLeft:"1.5rem", display:"flex"}}>
        <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=Hzi3PDz1AWU' controls='true' width='22rem' height='25rem'/>
        <Card.Body>
        <Card.Title>Beginner's guide on 'How to Meditate'</Card.Title>
        <Card.Text>Sadhguru goes in depth about what meditation really is and clarifies common misunderstandings that meditation is a practice.</Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=U9YKY7fdwyg' controls='true' width='22rem' height='25rem'/>
        <Card.Body>
        <Card.Title>10 minutes meditation for beginners</Card.Title>
        <Card.Text>Feel better, be better, and do better. Subscribe to Goodful for all your healthy self care needs, from food to fitness and everything in between!</Card.Text> 
        </Card.Body>
        </Card>
        

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=inpok4MKVLM' controls='true' width='22rem' height='18.5rem'/>
        <Card.Body>
        <Card.Title>5-Minute Meditation You Can Do Anywhere</Card.Title>
        <Card.Text>
        In just 5 minutes you can reset your day in a positive way.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=DulNz2CkoHI' controls='true' width='22rem' height='18.5rem'/>
        <Card.Body>
        <Card.Title>10 Minute Guided Meditation For Relaxation By Gurudev</Card.Title>
        <Card.Text>
        Try this easy 10 minute guided meditation for beginners for relaxation by Gurudev Sri Sri Ravi Shankar.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>

        <h1 style={{textAlign:"center", marginTop:"6rem", fontWeight:"bolder", marginBottom:"2rem"}}>20 minutes GUIDED MEDITATION</h1>
        <div style={{marginLeft:"1.5rem", display:"flex", marginTop:"2rem"}}>
        <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=kwPOT0tOENo' controls='true' width='22rem' height='25rem'/>
        <Card.Body>
        <Card.Title>May You be Fully Present in this Moment, 20 Minute Guided Meditation</Card.Title>
        <Card.Text>
        May you be fully present in this moment, embracing the beauty and wonder that surrounds you. May your awareness be heightened and your senses be attuned to the present.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=EXg_FFSkYCM' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>Powerful 20 Minute Guided Meditation for Manifesting Abundance and Happiness</Card.Title>
        <Card.Text>
        The video is perfect for those looking to achieve greater wealth, success, and happiness. 
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://youtu.be/MKDvoxMIQQE' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>20 Minute Guided Meditation for Mindfulness</Card.Title>
        <Card.Text>
        In this 20 min guided meditation, you'll receive prompts for your attention on your breath as well as regular reminders to get out of overthinking, distractions, and get back to focusing. This 20 minutes practice is voice only and without music.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://youtu.be/MIr3RsUWrdo' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>20 Minute Guided Meditation for Reducing Anxiety and Stress</Card.Title>
        <Card.Text>
        This is a guided meditation to take you on a journey of relaxation.  You will clear the clutter of your mind to calm you.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>

        <h1 style={{textAlign:"center", marginTop:"6rem", fontWeight:"bolder", marginBottom:"2rem"}}>GUIDED MEDITATION FOR SELF-ESTEEM AND SELF-LOVE</h1>
        <div style={{marginLeft:"1.5rem", display:"flex", marginTop:"2rem"}}>
        <Card className="hoverAn" style={{ width: '22rem', height:'30rem' }}>
        <ReactPlayer url='https://youtu.be/OUC52Whc4W4' controls='true' width='22rem' height='25rem'/>
        <Card.Body>
        <Card.Title>Meditation for Self-Esteem</Card.Title>
        <Card.Text>
        Possess little self-regard? Often hard on yourself? Find yourself beaten down with self-stigma? Struggling with depression? This guided mindfulness meditation seeks to increase your self-esteem by balancing self-awareness with a compassionate respect for yourself.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://youtu.be/zzNmOEJUg-s' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>Guided Mindfulness Meditation on Self-Love and Self-Worth</Card.Title>
        <Card.Text>
        You are worthy of loving yourself. This means having forgiveness for yourself - and taking care of yourself first. This will, in turn, result in a deeper care for others. This guided mindfulness meditation will focus on these ideas. 
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://youtu.be/VQwh692Z3OQ' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>Hypnosis to Build Confidence and Self-Worth | 20 Minute Meditation | Mindful Movement</Card.Title>
        <Card.Text>
        In this meditation practice with affirmations, develop a sense of safety in your body, befriend the aspect of yourself holding the belief that you are not worthy, and tap into the inherent confidence that is within you.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="hoverAn" style={{ width: '22rem', height:'30rem', marginLeft:"1.5rem" }}>
        <ReactPlayer url='https://youtu.be/MIr3RsUWrdo' controls='true' width='22rem' height='15.5rem'/>
        <Card.Body>
        <Card.Title>20 Minute Guided Meditation for Reducing Anxiety and Stress</Card.Title>
        <Card.Text>
        This is a guided meditation to take you on a journey of relaxation.  You will clear the clutter of your mind to calm you.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </>
            );
    }