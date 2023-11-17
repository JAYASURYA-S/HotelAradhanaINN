import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <>
      <div className="position-relative">
        <div className="position-relative eventheader">
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F843db6d2981ecb6acb0c526496f4c3fecd042b84-2000x517.png&w=1920&q=75"
            alt=""
          />
          <div
            className="position-absolute top-0"
            style={{ marginTop: "150px", marginLeft: "40px" }}
          >
            <h3 style={{ color: "white", fontWeight: "500", fontSize: "45px" }}>
              Gallery
            </h3>
          </div>
        </div>

        <div
          className="d-flex justify-content-center align-items-center w-100"
          style={{ padding: "0 3rem" }}
        >
          <div className="position-relative w-100 my-5">
            <div className="d-flex align-items-center justify-content-between">
              <h3>All Photos</h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
            </div>

            <div className="position-absolute top-5">
                <div className="p-4">
                    <p>All Photos</p>
                </div>
                <div className="p-4">
                    <p>Accomodation</p>
                </div>
                <div className="p-4">
                    <p>Dining</p>
                </div>
                <div className="p-4">
                    <p>Convention Hall</p>
                </div>
                <div className="p-4">
                    <p>Experiences</p>
                </div>
            </div>
          </div>

          <div className="w-100 h-100">
            <div className="row">
                <div className="col-1 col-md-2 col-lg-3 position-relative">
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=1200&q=75" className="position-absolute" alt="" style={{height:"100px",width:"100px"}}/>
                </div>
                <div className="col-1 col-md-2 col-lg-3">
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=1200&q=75" className="position-absolute" alt="" style={{height:"100px",width:"100px"}}/>
                </div>
                <div className="col-1 col-md-2 col-lg-3">
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=1200&q=75" className="position-absolute" alt="" style={{height:"100px",width:"100px"}}/>
                </div>
                <div className="col-1 col-md-2 col-lg-3">
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=1200&q=75" className="position-absolute" alt="" style={{height:"100px",width:"100px"}}/>
                </div>
            </div>
          </div>
        </div>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
