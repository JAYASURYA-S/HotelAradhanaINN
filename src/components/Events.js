import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Events = () => {
  return (
    <>
      <div className="events position-relative">
        <div className="position-relative eventheader">
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F843db6d2981ecb6acb0c526496f4c3fecd042b84-2000x517.png&w=1920&q=75"
            alt=""
          />
          <div
            className="position-absolute top-0"
            style={{ marginTop: "150px",marginLeft:"40px" }}
          >
            <h3 style={{ color: "white",fontWeight:"500",fontSize:"45px" }}>Events</h3>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center w-100" style={{height:"40vh"}}>
            <p style={{fontSize:"20px"}}>There are no upcoming events.</p>
        </div>
        <Navbar />
        <Footer/>
      </div>
    </>
  );
};

export default Events;
