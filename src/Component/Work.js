import Carousel from "react-bootstrap/Carousel";
import "./Work.css";

function Work() {
  return (
    <>
      <div className="workContainer">
        <h1 className="title">Customer/Design 1</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image1.jpeg"
              alt="First slide"
              height="700px"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image2.jpeg"
              alt="Second slide"
              height="700px"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image3.jpeg"
              alt="Third slide"
              height="700px"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="title">Customer/Design 2</h1>
        <h1 className="title">Customer/Design 3</h1>
      </div>
    </>
  );
}

export default Work;
