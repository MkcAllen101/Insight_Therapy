import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const BCards = ({img,name,type,text})=> {
  
  const [showText, setShowText] = useState(false);

  return (
    <div className={`book-card ${showText && 'pushed'}`}>
          <Card className='book-item' style={{ width: '20rem', height:"550px"}}>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <Card.Img src={img} alt='book' style={{height:"375px", width:"250px", marginTop:"0rem"}} />
            <Card.Body>
            <Card.Title style={{paddingTop:"1rem"}}>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
            <div>
              {showText?
              <button onClick={()=>{
                setShowText(!showText)
              }} style={{color:"white", backgroundColor:"black", paddingLeft:"1rem", paddingRight:"1rem", paddingTop:"0.5rem", paddingBottom:"0.5rem",     borderRadius:"1.5rem"}}>
                Hide Summary
              </button>:<button onClick={()=>{
                setShowText(!showText)
              }} style={{color:"white", backgroundColor:"black", paddingLeft:"1rem", paddingRight:"1rem", paddingTop:"0.5rem", paddingBottom:"0.5rem", borderRadius:"1.5rem"}}>
                Read Summary
              </button>}
              { showText?<Card.Text>
                {text}
              </Card.Text>:<></> }
            </div>
            </Card.Body>
            </div>
          </Card>
    </div>
  );
}
export default BCards;