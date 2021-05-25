import "./Home.css";
//for animation on scroll
import "./Component/AOS.js";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Telegram from "@material-ui/icons/Telegram";
import WorkIcon from "@material-ui/icons/Work";

function Home() {
  const imgURL =
    "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/Articles/types-of-flooring-hero-A.jpg";

  return (
    <>
      <div className="home-container">
        <div className="home-item" data-aos="fade-up">
          <div className="home-item-item">
            <div>
              <h1 className="title">
                WE PROVIDE ULTIMATE FLOORING AND PAVING SERVICES IN JOHOR.
              </h1>
              <p to="/work" className="paragraph">
                Bestile Ceramics is the number one flooring company in JB, Johor
                Bahru. We make it a priority to offer flexible services to
                accommodate your needs
              </p>
              <Link to="/work" className="paragraph">
                Check out our best work{" >"}
              </Link>
            </div>
          </div>
          <div className="home-item-item">
            <img
              src={`${imgURL}`}
              alt="ERROR"
              className="homeImage"
              style={{ width: "100%", height: "80%" }}
            />
          </div>
        </div>
        <div
          className="home-item"
          data-aos="fade-up"
          style={{
            backgroundImage: `url("/img/woodfloor.png")`,
          }}
        >
          <div className="home-item-item">
            <div style={{ color: "white" }}>
              <h1 className="title">
                We are specialist in tile, stone, home deco, renovation, and
                project.
              </h1>
              <p className="paragraph">
                As the leading flooring solutions provider in JB, Johor Bahru,
                Johor, we strives to provide products of the highest quality to
                our customers.
              </p>
            </div>
          </div>
        </div>
        <div
          className="home-item"
          style={{ flexWrap: "wrap-reverse" }}
          data-aos="fade-up"
        >
          <div className="home-item-item">
            <div className="products">
              <div className="product" data-aos="zoom-in">
                <img
                  alt="ERROR"
                  src="https://www.floordepot.com.my/wp-content/uploads/2019/12/2G-D3021-MAYA-TEAK_04.jpg"
                />
              </div>
              <div className="product">
                <div className="product" data-aos="zoom-in">
                  <img
                    alt="ERROR"
                    src="https://www.floordepot.com.my/wp-content/uploads/2019/12/Layer-16.jpg"
                  />
                </div>
              </div>
              <div className="product">
                <div className="product" data-aos="zoom-in">
                  <img
                    alt="ERROR"
                    src="https://www.floordepot.com.my/wp-content/uploads/2019/12/Layer-17.jpg"
                  />
                </div>
              </div>
              <div className="product">
                <div className="product" data-aos="zoom-in">
                  <img
                    alt="ERROR"
                    src="https://www.floordepot.com.my/wp-content/uploads/2019/12/45250800_xl-copy.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-item-item">
            <div>
              <h1 className="title">Our Services</h1>
              <p className="paragraph">
                We provide flooring installation through wide-range of flooring
                options, suitable for both residential and commercial
                properties. We also sell flooring ingredients as individual
                product. Check out our page to learn more.
              </p>

              <div className="optionContainer" data-aos="flip-left">
                <div
                  className="optionBox"
                  style={{ borderRight: "0.125rem solid black" }}
                >
                  <Link to="/product">
                    <ShoppingCartIcon fontSize="inherit" />
                    Products
                  </Link>
                </div>
                <div
                  className="optionBox"
                  style={{ borderRight: "0.125rem solid black" }}
                >
                  <Link to="/work">
                    <WorkIcon fontSize="inherit" />
                    Work
                  </Link>
                </div>
                <div className="optionBox">
                  <Link to="/contact">
                    <Telegram fontSize="inherit" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
