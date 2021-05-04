import "./Home.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-item">
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
        <div className="home-item" style={{ flexWrap: "wrap-reverse" }}>
          <div className="home-item-item" style={{ minWidth: "70%" }}>
            <div className="products">
              <div className="product">
                <img
                  alt="ERROR"
                  src="https://www.floordepot.com.my/wp-content/uploads/2019/12/2G-D3021-MAYA-TEAK_04.jpg"
                />
              </div>
              <div className="product">
                <div className="product">
                  <img
                    alt="ERROR"
                    src="https://www.floordepot.com.my/wp-content/uploads/2019/12/Layer-16.jpg"
                  />
                </div>
              </div>
              <div className="product">
                <div className="product">
                  <img
                    alt="ERROR"
                    src="https://www.floordepot.com.my/wp-content/uploads/2019/12/Layer-17.jpg"
                  />
                </div>
              </div>
              <div className="product">
                <div className="product">
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
      </div>
    </>
  );
}

export default Home;
