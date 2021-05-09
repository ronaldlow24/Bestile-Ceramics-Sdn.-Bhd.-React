import "./Home.css";
//for animation on scroll
import "./AOS";
import { Player } from "@lottiefiles/react-lottie-player";

import { Link } from "react-router-dom";

function Home() {
  const imgURL =
    "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/Articles/types-of-flooring-hero-A.jpg";

  return (
    <>
      <div className="home-container">
        <div className="home-item" data-aos="fade-up">
          <div className="home-item-item">
            <div>
              <h6 className="title">
                WE PROVIDE ULTIMATE FLOORING AND PAVING SERVICES.
              </h6>
              <p to="/work" className="paragraph">
                Bestile Ceramics is the number one flooring company in Johor. We
                make it a priority to offer flexible services to accommodate
                your needs
              </p>
              <Link to="/work" className="paragraph">
                Check out our best work{" >"}
              </Link>
            </div>
          </div>
          <div className="home-item-item">
            {/* <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_3giqgq7t.json"
              style={{ height: "300px", width: "300px" }}
            ></Player> */}
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
            backgroundImage: `url("https://i.imgur.com/bLRSUik.png")`,
          }}
        >
          <div className="home-item-item">
            <div style={{ color: "white" }}>
              <h6 className="title">
                We are specialist in tile, stone, home deco, renovation, and
                project.
              </h6>
              <p className="paragraph">
                As the leading flooring solutions provider in Johor, we strives
                to provide products of the highest quality to our customers.
              </p>
            </div>
          </div>
        </div>
        <div
          className="home-item"
          style={{ flexWrap: "wrap-reverse" }}
          data-aos="fade-up"
        >
          <div className="home-item-item" style={{ minWidth: "60%" }}>
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
              <h6 className="title">Our Services</h6>
              <p className="paragraph">
                Our wide-range of flooring options is suitable for both
                residential and commercial properties.
              </p>
              <Link className="paragraph" to="/contact">
                Contact us for more information {">"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
