import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Explore from "./Explore";
import Reviewform from "./Reviewform";
import Footer from "./Footer";
import Imageslider from "./Imageslider";
import Demo from "./Demo";

const Home = () => {
  const [showdropdown, setShowdropdown] = useState(false);

  const dropdown = () => {
    setShowdropdown(!showdropdown);
  };

  return (
    <>
    <div
        id="carouselExampleSlidesOnly"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        style={{width:"100%"}}
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
          style={{ top: "120px", marginLeft: "38px", color: "white",zIndex:"1" }}
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
          <div className="" style={{margin:"80px 0",padding:"0 20px"}}>
            <div className="position-relative">
              <h2 style={{fontSize:"30px",fontWeight:"600"}}>Our Rooms</h2>
              <p style={{fontSize:"20px",fontWeight:"400"}}>Comfy and Luxury rooms for all your needs</p>


              <Imageslider />            

              
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
            <p style={{ fontWeight: "400",textAlign:"justify" }}>
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

        <div className="container-fluid d-flex flex-column restaurantakshaya mt-5">
          <h3 className="text-center mb-5">Restaurants by Akshaya</h3>
          <div className="d-flex flex-column flex-md-row justify-content-evenly items-stretch" style={{width:"100%",rowGap:"48px"}}>
            <div className="card restaurantakshayacard mb-5 mb-md-3">
              <img
                src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F6d9caf9e849e50bf5007c8ebdfe097df7d3543c9-6960x4640.jpg&w=640&q=75"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center" style={{padding:"32px"}}>
                <h4 className="card-title mt-3 text-md-2xl" style={{color:"rgb(46 37 21)",fontWeight:"600",fontSize:"20px"}}>Garden Restaurant</h4>
                <p className="card-text text-md-lg" style={{color:"rgb(46 37 21)",fontWeight:"400",fontSize:"16px"}}>
                  We have huge addition big green lawn with open restaurant
                  available, easily sit 100 pax in one time
                </p>
              </div>
            </div>
            <div className="card restaurantakshayacard mb-5 mb-md-3">
              <img
                src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F441a9c8b5e15b42b86136f42539add8dd76ae1ce-6960x4640.jpg&w=640&q=75"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center" style={{padding:"32px"}}>
                <h4 className="card-title mt-3 text-md-2xl" style={{color:"rgb(46 37 21)",fontWeight:"600",fontSize:"20px"}}>Fine Dining</h4>
                <p className="card-text text-md-lg" style={{color:"rgb(46 37 21)",fontWeight:"400",fontSize:"16px"}}>
                  Akshaya restaurant 20 cover fine dinning with all the
                  cutleries& cracaries with view of green lawn area, you will
                  get all the Ala carte order in the same place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Explore/>
        <Reviewform/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
