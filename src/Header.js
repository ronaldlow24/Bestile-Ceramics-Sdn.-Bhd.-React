import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

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

            <NavDropdown title="PROJECT" id="collasible-nav-dropdown"  alignRight  onClick={(e) => e.stopPropagation()}>
              <div onClick={() => setExpanded(false)}>
              <NavDropdown.Item as={Link} to="/project/786051444861896">Furnising Design</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/958915947575444">Pebble wash</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/787373388063035">Natural Stone</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/810204809113226">Government Project - Jakoa Kluang</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/805945342872506">Bath Talk</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/787446658055708">Kitchen Cabinet Design</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/807734999360207">25th Storey Condominium Project</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/805940029539704">Swimming Pool</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/786141974852843">Istana Besar Johor</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/project/787370128063361">Natural Stone 2</NavDropdown.Item>
              </div>
        
              
            </NavDropdown>

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
