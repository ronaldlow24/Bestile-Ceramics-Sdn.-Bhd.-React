import Carousel from "react-bootstrap/Carousel";
import "./Work.css";
import Gallery from "react-photo-gallery";
import customerData from "./customerData";
import "./AOS";

function Work() {
  return (
    <>
      <div className="workContainer" data-aos="fade-up">
        <h1 className="title">Some of The Best Works</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image1.jpeg"
              alt="First slide"
              height="500px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image2.jpeg"
              alt="Second slide"
              height="500px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image3.jpeg"
              alt="Third slide"
              height="500px"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="title">Gallery</h1>
        <Gallery photos={customerData} direction={"column"} />
      </div>
    </>
  );
}

export default Work;
