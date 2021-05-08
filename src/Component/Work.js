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
        <h1 className="title">Some of The Best Works</h1>
        <Carousel>
          {workData.map((workData, id) => (
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={workData.src}
                alt={workData.title}
                height="500px"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <h6 className="title">Or view our project list</h6>

        <CardDeck style={{ justifyContent: "center" }}>
          {projectData.map((projectData, id) => (
            <div key={id}>
              <Link
                to={`/project/${projectData.albumID}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Card className="card">
                  <Card.Img variant="top" src={`${projectData.src}`} />
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
