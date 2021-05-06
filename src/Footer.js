import "./Footer.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//icon
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
  return (
    <>
      <Navbar className="nav-bar-bottom" sticky="bottom">
        <Nav className="m-auto">
          <Nav.Link
            style={{ color: "white" }}
            target="_blank"
            href="https://www.facebook.com/Bestile-Ceramics-Sdn-Bhd-759558020844572/"
          >
            <FacebookIcon />
          </Nav.Link>
          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="https://wa.me/60127279591"
              style={{ color: "white" }}
            >
              <WhatsAppIcon />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="tel:077551177"
              style={{ color: "white" }}
            >
              <PhoneIcon />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="mailto:Bestile.homedeco@gmail.com"
              style={{ color: "white" }}
            >
              <MailOutlineIcon />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Footer;
