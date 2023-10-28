import Card from 'react-bootstrap/Card';
import {default as feature1} from '../images/feature1.png';
import {default as feature2} from '../images/therapist_feature.png';
import {default as feature3} from '../images/books_feature.png';
import {default as feature4} from '../images/blog_feature.png';

function FeatureCard() {
  return (
    <div style={{marginTop:"10rem", marginLeft:"4rem", display:"flex", marginLeft:"6.8rem", marginBottom:"6rem"}}>
    <Card style={{ width: '18rem', textAlign:"center", backgroundColor:"#F7FBFC", border:"none"}}>
      <Card.Body>
          <img src={feature1} style={{width:"200px", height:"auto", marginBottom:"1rem"}} />
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.5rem"}}>Meditation</Card.Subtitle>
        <Card.Text>
        Meditation helps calm the mind and promotes relaxation, reducing feelings of stress and anxiety. <br /><b>"Maintain meditation schedule with Insight Therapy."</b> 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', textAlign:"center", backgroundColor:"#F7FBFC", marginLeft:"3rem", border:"none"}}>
      <Card.Body>
        <img src={feature2} style={{width:"200px", height:"auto", marginBottom:"1rem"}} />
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.5rem"}}>Therapists</Card.Subtitle>
        <Card.Text>
          Get in touch with a trained professional specialized in different areas of mental health. <br/> <b>Seek help anytime you need with Insight Therapy</b> 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', textAlign:"center", backgroundColor:"#F7FBFC", marginLeft:"3rem", border:"none"}}>
      <Card.Body>
       <img src={feature3} style={{width:"200px", height:"auto", marginBottom:"1rem"}} />

        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.5rem"}}>Books</Card.Subtitle>
        <Card.Text>
        Books are an essential tool for personal and intellectual growth. <br/> <b>Get book recommendations that most suits and helps you from Insight Therapy</b>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', textAlign:"center", backgroundColor:"#F7FBFC", marginLeft:"3rem", border:"none"}}>
      <Card.Body>
      <img src={feature4} style={{width:"200px", height:"auto", marginBottom:"1rem"}} />
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.5rem"}}>Blogs & Stories</Card.Subtitle>
        <Card.Text>
        Reading blogs can help readers feel connected to others who share similar experiences.<br/>
        <b>Share your experience with others on Insight Therapy</b>
        <br />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default FeatureCard;