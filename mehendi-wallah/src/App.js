import logo from './logo.svg';
import './App.css';
import backdrop from './backdrop.png';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Navbar bg="transparent" variant="light">
          <Container>
            <Nav className="justify-content-start">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#whyus">Why Us</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className='justify-content-center'>
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Nav className='justify-content-end'>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
              <Nav.Link href="#more">More</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
          <img src={backdrop} className="App-backdrop" alt="backdrop" />
        </Container>
        <Container className='book-now-text'>
          Best Salon and Mehndi <br /> Services in the City! <br />
          <button className='book-now-button'>Book Now</button>
        </Container>
      
      
    </div>
  );
}

export default App;
