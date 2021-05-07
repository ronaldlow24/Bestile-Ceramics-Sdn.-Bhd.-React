import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-bar"
        expanded={expanded}
      >
        <Navbar.Brand as={Link} to="/">
          <img src="/img/logo.jpg" alt="Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Brand>Bestile Ceramics</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() =>
            setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))
          }
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav" onClick={() => setExpanded(false)}>
            <Nav.Link as={Link} to="/">
              HOME
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
