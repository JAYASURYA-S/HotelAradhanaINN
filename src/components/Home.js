import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Explore from "./Explore";

const Home = () => {

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2fcce6f01256c2d901e38ab6d7fdf5f6e87e04a5-1024x683.jpg&w=1920&q=75"
              className="d-block w-100 img-fluid object-fit-cover carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F082d5e33aba31042d90fe99b826d3a298a6e4f9a-6000x4000.jpg&w=1920&q=75"
              className="d-block w-100 img-fluid object-fit-cover carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F29c336e9142c1d6e9550cb9ce864752b02b5ae3d-5472x3648.jpg&w=1920&q=75"
              className="d-block w-100 img-fluid object-fit-cover carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F5163329c3a7b5f13cc311058fc2bbdf5ab346b9d-6000x4000.jpg&w=1920&q=75"
              className="d-block w-100 img-fluid object-fit-cover carousel-image"
              alt="..."
            />
          </div>
        </div>
        <Navbar />
        <div
          className="position-absolute"
          style={{ top: "120px", marginLeft: "38px", color: "white" }}
        >
          <h3 className="display-5 fw-bold">
            Hotel
            <br />
            Aradhana Inn
          </h3>
          <p style={{ fontSize: "30px" }}>
            Lake view resort and convention hall
          </p>
          <Link to="/rooms">
            <button className="btn booknowbtn mt-3">
              Book Now
              <span>
                <i className="fa fa-thin fa-arrow-right"></i>
              </span>
            </button>
          </Link>
        </div>
        <div>
          <div className="mt-5">
            <div className="position-relative">
              <h3>Our Rooms</h3>
              <p>Comfy and Luxury rooms for all your needs</p>
              <div className="position-absolute top-0 end-0 me-3">
                <button className="slidebtn">
                  <i className="fa fa-thin fa-arrow-left"></i>
                </button>
                <button className="slidebtn">
                  <i className="fa fa-thin fa-arrow-right"></i>
                </button>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body position-absolute bottom-0  text-white">
                      <p className="card-text fw-bold fs-5">
                        Villas <br /> <span className="fw-light">6 People</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F64219cd5f1f554d95e30427536700303e6520059-5472x3648.jpg&w=640&q=75"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body position-absolute bottom-0  text-white">
                      <p className="card-text fw-bold fs-5">
                        Suite Room
                        <br /> <span className="fw-light">2 People</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F7a7c75bce14b8cb942a951b73d6f1b37581aee51-1024x683.jpg&w=640&q=75"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body position-absolute bottom-0  text-white">
                      <p className="card-text fw-bold fs-5">
                        Deluxe with Balcony Room <br />{" "}
                        <span className="fw-light">2 People</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F825ec47f4e47ac800327e6108294a9580901d8bc-1280x853.jpg&w=640&q=75"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body position-absolute bottom-0  text-white">
                      <p className="card-text fw-bold fs-5">
                        Deluxe Room <br />{" "}
                        <span className="fw-light">2 People</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=&w=640&q=75"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body position-absolute bottom-0  text-white">
                      <p className="card-text fw-bold fs-5">
                        Normal Room <br />{" "}
                        <span className="fw-light">2 People</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative conventionhall">
          <img
            src="https://cdn.sanity.io/images/so7v7vzh/production/9ef23791328239c29c01ef40d25807d776ffdfe3-1529x860.jpg"
            className="card-img conventionhallimg"
            alt="..."
          />
          <div className="conventionhallcontent">
            <h2 className="fw-bold">Multi Purpose Convention Hall</h2>
            <p style={{ fontWeight: "400" }}>
              At LAKE VIEW SENATE HALL, we pride ourselves in offering
              custom-crafted meetings and events to delight any palate. We
              believe that providing responsive and engaging service will ensure
              that we deliver a memorable meeting. The venue, room set-up,
              catering and audio visuals... with so many details to consider,
              you need a partner who anticipates your needs before you have even
              thought of them. Some call it intuition. We call it the Aradhana
              touch.
            </p>
            <button
              style={{
                width: "160px",
                height: "60px",
                borderRadius: "20px",
                fontSize: "18px",
                border: "2px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              Explore more
            </button>
          </div>
        </div>

        <div className="d-flex flex-column restaurantakshaya">
          <h3 className="text-center mb-5">Restaurants by Akshaya</h3>
          <div className="d-flex flex-column flex-md-row justify-content-evenly">
            <div className="card restaurantakshayacard mb-5 mb-md-3">
              <img
                src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fe29dda5e15461d2781bab2fb1eb4df3c6abc5a39-1024x768.jpg&w=640&q=75"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-3 px-4">
                <h4 className="card-title mt-3">Garden Restaurant</h4>
                <p className="card-text" style={{ fontSize: "18px" }}>
                  We have huge addition big green lawn with open restaurant
                  available, easily sit 100 pax in one time
                </p>
              </div>
            </div>
            <div className="card restaurantakshayacard mb-5 mb-md-3">
              <img
                src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F268cda7e4fff5729469de54df5f346a06ecadb9f-933x602.png&w=640&q=75"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-3 px-4">
                <h4 className="card-title mt-3">Fine Dining</h4>
                <p className="card-text" style={{ fontSize: "18px" }}>
                  Akshaya restaurant 20 cover fine dinning with all the
                  cutleries& cracaries with view of green lawn area, you will
                  get all the Ala carte order in the same place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Explore/>
        
      </div>
    </>
  );
};

export default Home;
