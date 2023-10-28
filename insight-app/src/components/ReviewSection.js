import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Review() {
  
  const reviewData = [
    {
      id:1,
      name:"Johnson, UK",
      text:"This mental health website provides a comprehensive resource hub, offering valuable information and support for individuals seeking to improve their well-being."
    },
    {
      id:2,
      name:"Stefan Australia",
      text:"With its user-friendly interface and intuitive navigation, this mental health website makes it easy to access a wide range of mental health resources."
    },
    {
      id:3,
      name:"Selena, US",
      text:"A trusted source for mental health information, this website offers evidence-based insights and expert advice, empowering users to make informed decisions."
    },
    {
      id:4,
      name:"Lionel, Argentina",
      text:"This mental health website provides a comprehensive resource hub, offering valuable information and support for individuals seeking to improve their well-being."
    },
    {
      id:5,
      name:"Raheem, India",
      text:"From depression to anxiety and beyond, this mental health website covers a diverse range of topics, providing practical tips and strategies to help individuals cope."
    }
]
  const [reviews, setReviews] = useState(reviewData);

  return (
    <div className='review-card' style={{marginTop:"1rem", marginBottom:"4rem", display:"flex"}}>
      {reviews.map((singleRev)=>{
      return <Card key={singleRev.id} style={{ flex:1, width:'25rem',margin: "0 0.5rem", height:"30rem"}}>
      <Card.Body>
        <div className='invCom'></div>
        <Card.Text style={{fontWeight:"bold", marginBottom:"4rem", fontSize:"1.25rem"}}>
        {singleRev.text}
        </Card.Text>
        <Card.Footer>
        <p>{singleRev.name}
        </p></Card.Footer>
      </Card.Body>
    </Card>})}
    </div>
  );
}

export default Review;