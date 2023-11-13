import React from "react";
import Navbar from "./Navbar";

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
            <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2fcce6f01256c2d901e38ab6d7fdf5f6e87e04a5-1024x683.jpg&w=1920&q=75" className="d-block w-100 img-fluid object-fit-cover carousel-image"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F082d5e33aba31042d90fe99b826d3a298a6e4f9a-6000x4000.jpg&w=1920&q=75" className="d-block w-100 img-fluid object-fit-cover carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F29c336e9142c1d6e9550cb9ce864752b02b5ae3d-5472x3648.jpg&w=1920&q=75" className="d-block w-100 img-fluid object-fit-cover carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F5163329c3a7b5f13cc311058fc2bbdf5ab346b9d-6000x4000.jpg&w=1920&q=75" className="d-block w-100 img-fluid object-fit-cover carousel-image" alt="..." />
          </div>
        </div>
        <Navbar/>
        <div>
            <h3>Hotel<br/>Aradhana Inn</h3>
            <p>Lake view resort and convention hall</p>
            <button className="btn booknowbtn">Book Now <span><i class="bi bi-arrow-right"></i></span></button>
        </div>
      </div>
    </>
  );
};

export default Home;
