import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
  <Navbar.Brand href="#home"><img src="/img/logo.jpg" alt="Logo" className="nav-logo" /></Navbar.Brand>
  <Navbar.Brand>Bestile Ceramics</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto nav" >
    <Nav.Link href="#deets">ABOUT</Nav.Link>

    <Nav.Link href="#deets">WORKS</Nav.Link>
    <Nav.Link href="#deets">CONTACT</Nav.Link>

     
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}

export default Header;
