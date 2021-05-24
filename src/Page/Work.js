import Carousel from "react-bootstrap/Carousel";
import "./Work.css";
import workData from "../Data/workData";
import projectData from "../Data/projectData";

import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./Component/AOS.js";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: 'url("/img/brick.jpg")',
    padding: theme.spacing(8, 0, 6),
    color: "white",
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      boxShadow: "0 0 5px 2px",
    },
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Work() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Our Best Work
          </Typography>
          <Typography variant="h5" align="center" paragraph>
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

        <h6
          style={{ textAlign: "center", marginTop: "50px", fontSize: "1.3rem" }}
        >
          Or view our project list
        </h6>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectData.map((project, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Link
                  to={`/project/${project.albumID}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={project.src}
                      title={project.albumTitle}
                      alt={project.albumTitle}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.albumTitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Work;
