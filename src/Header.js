import "./Header.css";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Navbar.Brand as={Link} to="/">
          <img src="/img/logo.jpg" alt="Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Brand>Bestile Ceramics</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav">
            <Nav.Link as={Link} to="/product">
              PRODUCT
            </Nav.Link>
            <Nav.Link as={Link} to="/work">
              WORK
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
