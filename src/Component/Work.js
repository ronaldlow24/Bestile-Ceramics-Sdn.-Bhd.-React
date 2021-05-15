import Carousel from "react-bootstrap/Carousel";
import "./Work.css";
import workData from "./workData";
import projectData from "./projectData";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./AOS";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: theme.spacing(8, 0, 6),
  },
}));

function Work() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Our Best Work
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Bestile Ceramics's work always bring satisfaction.
          </Typography>
        </Container>
      </div>

      <div className="workContainer" data-aos="fade-up">
        <div className="carousel">
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
                    alt={`${projectData.albumTitle}`}
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
