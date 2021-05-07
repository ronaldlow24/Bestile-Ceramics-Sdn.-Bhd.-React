import Carousel from "react-bootstrap/Carousel";
import "./Work.css";
import Gallery from "react-photo-gallery";
import galleryData from "./galleryData";
import workData from "./workData";

import "./AOS";

function Work() {
  return (
    <>
      <div className="workContainer" data-aos="fade-up">
        <h1 className="title">Some of The Best Works</h1>
        <Carousel>
          {workData.map((workData, id) => (
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={workData.src}
                alt={workData.title}
                height="700px"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <Gallery photos={galleryData} direction={"column"} /> */}
      </div>
    </>
  );
}

export default Work;
