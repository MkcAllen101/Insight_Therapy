import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function MainNav() {

  const {user} = useAuthContext()

  const {logout} = useLogout()

  const handleSubmit = () =>{
    logout()
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary" style={{marginTop:"0rem"}}>
      <Container style={{ marginLeft:"0rem"}}>
      <Navbar.Brand href="/" style={{fontFamily:"fantasy", fontSize:"2rem", marginLeft:"0.5rem", marginRight:"2.5rem"}}>Insight Therapy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{fontSize:"1.2rem"}}>
            <Link to='/' style={{color:"black"}} className='nav-link'>Home</Link>
            <Link to='/yoga' style={{color:"black"}} className='nav-link'>Yoga</Link>
            <Link to='/meditation' style={{color:"black"}} className='nav-link'>Meditation</Link>
            <Link to='/appointments' style={{color:"black"}} className='nav-link'>Appointments</Link>
            <Link to="/books" style={{color:"black"}} className='nav-link'>Books</Link>
            <Link to='/blogs' style={{color:"black"}} className='nav-link'>Blogs</Link>
        </Nav>
        
          <Nav style={{fontSize:"1.2rem",position:"absolute",right:"2.5vw"}}>
          <NavDropdown title="Help Center" id="collasible-nav-dropdown" style={{color:"black"}}>
          <NavDropdown.Item><Link className='nav-link' to='/aboutus'>About Us</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Top FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Privacy</NavDropdown.Item>
            </NavDropdown>
            
            {!user && (
            <Link to='/login' className='nav-link auth-form' style={{marginLeft:"1.5rem"}}>Login</Link>)}

            {user && (
              <div>
            <Link onClick={handleSubmit} className='nav-link'>Logout</Link></div>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MainNav;