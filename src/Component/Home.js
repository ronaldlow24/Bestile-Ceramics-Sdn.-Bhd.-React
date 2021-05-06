import "./Home.css";
import { Player } from "@lottiefiles/react-lottie-player";
//for animation on scroll
import "./AOS";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import customerData from "./customerData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "black",
  },
  titleBar: {
    background: "transparent",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <div className="home-container">
        <div className="home-item" data-aos="fade-up">
          <div className="home-item-item">
            <div>
              <h6 className="title">
                WE PROVIDE ULTIMATE FLOORING AND PAVING SERVICES.
              </h6>
              <p className="paragraph">
                We make it a priority to offer flexible services to accommodate
                your needs
              </p>
            </div>
          </div>
          <div className="home-item-item">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_3giqgq7t.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
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
                As the leading flooring solutions provider in the country, we
                strives to provide products of the highest quality to our
                customers.
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
              <h6 className="title">Our Product</h6>
              <p className="paragraph">
                Our wide-range of flooring options is suitable for both
                residential and commercial properties.
              </p>
            </div>
          </div>
        </div>
        <div className="home-item" data-aos="fade-up">
          <div className="home-item-item">
            <div style={{ width: "100vw" }}>
              <h6 className="title">Our Client</h6>

              <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                  {customerData.map((tile, id) => (
                    <GridListTile key={id}>
                      <img src={tile.src} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
