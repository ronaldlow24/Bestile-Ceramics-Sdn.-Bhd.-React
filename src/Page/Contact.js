import "./Contact.css";
//for animation on scroll
import "./AOS";

//icon
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  return (
    <>
      <div className="contactContainer" data-aos="zoom-in">
        <div className="form">
          <h1>Contact information</h1>
          <p>We're open for any suggestion or just to have a chat.</p>
          <HomeIcon />

          <h6>Show Room Address</h6>
          <p>
            <a
              style={{ color: "white", textDecoration: "underline" }}
              rel="noreferrer"
              target="_blank"
              href="https://scontent.fmkz1-1.fna.fbcdn.net/v/t31.18172-8/19023635_1079927178807653_4585373954544358200_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=vZxLswDMeiIAX_pKXNY&_nc_ht=scontent.fmkz1-1.fna&oh=c5f1e93c10e86c399e55da72d24b4f2b&oe=60B6D527"
            >
              25 , Jalan Suria Perdana ,Taman Suria , 86200 Simpang Renggam
              ,Johor.
            </a>
          </p>
          <PhoneIcon />

          <h6>Phone Number</h6>
          <p>07-755 1177</p>
          <EmailIcon />

          <h6>Email</h6>
          <p>Bestile.homedeco@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
