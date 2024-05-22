import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dolcentina.com/wp-content/uploads/2023/10/image-32-e1696262452998.png"
                alt="First slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="card-title fs-1 text fw-lighter">
                  Tu marca favorita de yerba mate en Italia
                </h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Descubri todas las marcas de yerba mate disponibles ahora.
                  Precios super convenientes y envios express
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dolcentina.com/wp-content/uploads/2024/04/slider-homepage-2024.png"
                alt="Second slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="card-title fs-1 text fw-lighter">
                  New Collection
                </h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Discover our latest products and styles.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dolcentina.com/wp-content/uploads/2024/04/fermopoint-slider-2024.png"
                alt="Third slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="card-title fs-1 text fw-lighter">
                  Exclusive Offers
                </h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Take advantage of our special promotions.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
