import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
  return (
    <Carousel style={{paddingTop:"4rem", paddingBottom:"2.5rem"}} variant='dark'>
      <Carousel.Item>
        <div>
            <h3 className='carouselBG1' style={{paddingBottom:"5rem", marginLeft:"25rem"}}>
            </h3>
        </div>
        <Carousel.Caption>
          <a href='#' style={{textDecoration:"none", color:"black", fontFamily:"cursive"}}><h3 style={{marginBottom:"20rem", marginLeft:"3rem"}}>Meditation</h3></a>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <div>
            <a href='#'><h3 className='carouselBG2' style={{paddingBottom:"5rem", marginLeft:"25rem"}}>
            </h3></a>
        </div>
        <Carousel.Caption>
        <a href='#' style={{textDecoration:"none", color:"black", fontFamily:"cursive"}}><h3 style={{marginBottom:"20rem", marginLeft:"3rem"}}>Yoga</h3></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div>
            <h3 className='carouselBG3' style={{paddingBottom:"5rem", marginLeft:"25rem"}}>
            </h3>
        </div>

        <Carousel.Caption>
        <a href='#' style={{textDecoration:"none", color:"black", fontFamily:"cursive"}}><h3 style={{marginBottom:"20rem", marginLeft:"3rem"}}>Books</h3></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;