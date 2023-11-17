import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Restaurant = () => {
  return (
    <>
      <div className="position-relative">
        <div
          className="position-relative eventheader restaurantheader"
          style={{ height: "50vh", border: "3px solid" }}
        >
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fc091b41f31c2b790dfb4a57b2920cb660baad878-1024x485.jpg&w=1920&q=75"
            alt=""
            style={{ height: "100%" }}
          />
          <div
            className="d-flex flex-column position-absolute top-0"
            style={{ marginTop: "120px", marginLeft: "30px" }}
          >
            <h3 style={{ color: "white", fontWeight: "500", fontSize: "45px" }}>
              Restaurants by Akshaya
            </h3>
            <p style={{ color: "white", fontWeight: "400", fontSize: "30px" }}>
              Multi cuisine dining
            </p>
          </div>
        </div>

        <div className="d-flex flex-column mt-5">
          <div className="position-relative gardenrestaurant w-100 d-flex flex-column align-items-center">
            <h3>Garden Restaurant</h3>
            <div className="d-flex flex-md-column align-items-center w-100 flex-column-reverse">
              <p className="text-justify text-md-center">
                We have huge addition big green lawn with open restaurant
                available, easily sit 100 pax in one time
              </p>
              <div className="restaurantcarousel">
              <div id="carouselExampleIndicators" className="carousel slide position-relative">
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F82d4fa40a814568db12e01e32ebb9e386aea7cae-1024x613.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fc9c9f5addd3ea79da8a3387d7a75c842729e2c37-1024x485.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon position-absolute top-50"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon position-absolute top-50"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column finedining align-items-center">
            <h3>Fine Dining</h3>
            <p>Akshaya restaurant 20 cover fine dinning with all the cutleries& cracaries with view of green lawn area, you will get all the Ala carte order in the same place.</p>
          </div>
        </div>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default Restaurant;
