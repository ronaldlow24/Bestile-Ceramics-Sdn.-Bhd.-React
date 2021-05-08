import Carousel from "react-bootstrap/Carousel";
import "./Work.css";
import workData from "./workData";
import projectData from "./projectData";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./AOS";

function Work() {
  return (
    <>
      <div className="workContainer" data-aos="fade-up">
        <div className="carousel">
          <h1 className="title">Our Best Works</h1>
          <Carousel>
            {workData.map((workData, id) => (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={workData.src}
                  alt={workData.title}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <h6 style={{ textAlign: "center", marginTop: "50px" }}>
          Or view our project list
        </h6>

        <CardDeck style={{ justifyContent: "center" }}>
          {projectData.map((projectData, id) => (
            <div key={id}>
              <Link
                to={`/project/${projectData.albumID}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={`${projectData.src}`}
                    height="270px"
                  />
                  <Card.Body>
                    <Card.Title>{projectData.albumTitle}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </CardDeck>
      </div>
    </>
  );
}

export default Work;
