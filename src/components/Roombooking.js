import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import rooms from "./RoomsData";

const Roombooking = () => {
  const { id } = useParams();
  const [roomdetails, setRoomdetails] = useState([]);

  useEffect(() => {
    setRoomdetails(() =>
      rooms.filter((room) => {
        return room.id === parseInt(id);
      })
    );
  }, []);


  return (
    <>
      <div
        className="d-flex flex-column position-relative"
        style={{ width: "100%", height: "100%", gap: "3rem" }}
      >
        <div className="position-relative h-70vh h-50vh">
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F380012985760df8919965985456e614e24f35a11-6467x4640.jpg&w=1920&q=75"
            alt=""
            style={{
              filter: "brightness(60%)",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0"
            style={{ marginTop: "150px", marginLeft: "40px" }}
          >
            <h3 style={{ color: "white", fontWeight: "500", fontSize: "45px" }}>
              Our Rooms
            </h3>
          </div>
        </div>

        <div
          className="d-flex flex-column"
          style={{ padding: "58px", gap: "1.5rem" }}
        >
          <div className="d-flex flex-column gap-2">
            {roomdetails.map((room) => {
              return (
                <h4
                  style={{
                    color: "rgb(46 37 21)",
                    fontSize: "32px",
                    fontWeight: "600",
                  }}
                >
                  {room.title}
                </h4>
              );
            })}
            <div className="d-flex align-items-center gap-3">
              {roomdetails.map((room) => {
                return (
                  <>
                    <p style={{ fontSize: "1.9rem", fontWeight: "400" }}>
                      {room.people} people -
                    </p>
                    <p style={{ fontSize: "1.9rem", fontWeight: "400" }}>
                      {room.sqft} sq.ft m<sup>2</sup>
                    </p>
                  </>
                );
              })}
            </div>
          </div>

          <div
            className="roombooking position-relative"
            style={{ height: "50vh", borderRadius: "8px", overflow: "hidden" }}
          >
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              style={{ width: "100%", height: "100%" }}
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div
                class="carousel-inner"
                style={{ height: "100%", width: "100%" }}
              >
                <div class="carousel-item active">
                  <img
                    src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fda024982362ee5fa064c5226021247b8f34f4821-6960x4640.jpg&w=1920&q=75"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb792cd5fb836a78b11e256dee82b8a64725da367-6960x4640.jpg&w=1920&q=75"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fc53b151ce718be5ac4e27acda40f6ecdf2e5d9a1-6960x4640.jpg&w=1920&q=75"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fc148ad1f1c055a9f1ad9bea03eed781f604b912b-6960x4640.jpg&w=1920&q=75"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-start gap-5">
            <div className="d-flex flex-column gap-5" style={{ width: "66%" }}>
              <p
                style={{
                  color: "rgb(46 37 21)",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                Our Deluxe hotel room offers a peaceful Hill side view and is
                elegantly designed, keeping your comfort quotient in mind. This
                guest room is spread across an area of 294 sq. ft. and comes
                with a king-sized bed and high-speed internet, among all the
                necessities, to make your stay pleasant and satisfying.
              </p>
              <div className="d-flex flex-column gap-4">
                <h3
                  style={{
                    color: "rgb(46 37 21)",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Room Amenities
                </h3>
                <div className="roomamenities">
                  <div className="d-flex gap-2 ">
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F8b73068e60ab7a8c6f92d6ea081fcb2123d42a4f-225x225.jpg&w=32&q=75"
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                    <p
                      style={{
                        color: "rgb(46 37 21)",
                        fontSize: "16px",
                        height: "auto",
                      }}
                    >
                      Free Wifi
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F26abbd92070ac6f55efe8ca7d388f780b7894ae8-196x126.jpg&w=32&q=75"
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                    <p style={{ color: "rgb(46 37 21)", fontSize: "16px" }}>
                      LED TV 32inch
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fe05e0c414a675dd5b32b3736e1d754f6754f627f-522x575.jpg&w=32&q=75"
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                    <p style={{ color: "rgb(46 37 21)", fontSize: "16px" }}>
                      Coffee Kettle
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb0d03420d6d90a774cf8f96571c9c563ec96e879-1500x1293.jpg&w=32&q=75"
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                    <p style={{ color: "rgb(46 37 21)", fontSize: "16px" }}>
                      Intercom
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <img
                      src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F624892fc6fd325bc3ec7beaf03683f31ac225eca-299x168.jpg&w=32&q=75"
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                    <p style={{ color: "rgb(46 37 21)", fontSize: "16px" }}>
                      Breakfast Included
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-33" style={{ width: "100%" }}>
              <div
                className="d-flex flex-column gap-5 py-4"
                style={{
                  width: "100%",
                  border: "1px solid rgb(202 206 211)",
                  borderRadius: "0.75rem",
                }}
              >
                <div className="d-flex flex-column gap-5">
                  <div
                    className="d-flex flex-column px-5"
                    style={{ gap: "2px" }}
                  >
                    <p style={{ fontSize: "20px", fontWeight: "700" }}>
                      Room Details
                    </p>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p style={{ fontSize: "16px" }}>
                        Cost of the room per night starts from
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <p
                          style={{
                            fontSize: "12px",
                            color: "rgb(107 114 128)",
                            fontWeight: "700",
                            textDecoration: "line-through",
                            marginTop: "0.25rem",
                          }}
                        >
                          ₹{roomdetails.map((room) => room.price)}
                        </p>
                        <div className="d-flex align-items-center gap-1">
                          <p style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "20px" }}>₹</span>
                            <strong
                              style={{ fontSize: "24px", fontWeight: "700" }}
                            >
                              {roomdetails.map((room) => room.offerprice)}
                            </strong>
                          </p>
                          <div
                            className="px-3"
                            style={{
                              color: "rgb(255 255 255)",
                              borderRadius: "0.125rem",
                              backgroundColor: "rgb(208 174 113)",
                              marginBottom: "6px",
                            }}
                          >
                            <span
                              style={{ fontSize: "12px", fontWeight: "500" }}
                            >
                              {roomdetails.map((room) => room.offer)} off
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{
                        border: "1px solid rgb(202 206 211)",
                        borderRadius: "12px",
                        width: "100%",
                      }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ borderBottom: "1px solid rgb(202 206 211)" }}
                      >
                        <div
                          className="position-relative d-flex flex-column gap-2 px-4 py-3"
                          style={{ width: "100%" }}
                        >
                          <h6 style={{ fontSize: "12px", fontWeight: "700" }}>
                            Check in and Check out
                          </h6>
                          <div style={{ width: "100%" }}>
                            <input
                              type="date"
                              id=""
                              style={{
                                width: "100%",
                                height: "30px",
                                padding: "20px 20px 20px 20px",
                                borderRadius: "8px",
                                border: "1px solid rgb(209 213 219)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-4 py-3">
                        <input
                          type="checkbox"
                          id=""
                          style={{
                            color: "rgb(208 174 113)",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                        />
                        <h6
                          style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            marginTop: "2px",
                          }}
                        >
                          Add extra bed at ₹750
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-column gap-2 px-5 py-1"
                  style={{ borderTop: "1px solid rgb(229 231 235)" }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "17px" }}>Tax Amount</p>
                    <p style={{ fontSize: "17px", marginRight: "10px" }}>--</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "17px" }}>Total Amount</p>
                    <p style={{ fontSize: "17px", marginRight: "10px" }}>--</p>
                  </div>
                </div>
                <div className="px-5">
                  <Link to={`/payment/${id}`}>
                  <button
                    className="px-5 py-4"
                    style={{
                      width: "100%",
                      fontSize:"20px",
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                      opacity:"0.5",
                      color:"white",
                      fontWeight:"500",
                      backgroundColor:"rgb(208 174 113)",
                      border:"1px solid transparent",
                      borderRadius:"12px"
                    }}
                  >
                    Book Room
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column gap-4 mt-5">
            <h3 style={{fontSize:"24px",fontWeight:"700"}}>Things to Know</h3>
            <div className="thingtoknow">
                <div className="d-flex flex-column gap-2">
                    <h3 style={{fontSize:"20px",fontWeight:"700"}}>House rules</h3>
                    <p style={{fontSize:"18px"}}>Check in - 1:00 pm</p>
                    <p style={{fontSize:"18px"}}>Check out - 11:00 am</p>
                </div>
                <div className="d-flex flex-column gap-2">
                    <h3 style={{fontSize:"20px",fontWeight:"700"}}>Facilities</h3>
                    <p style={{fontSize:"18px"}}>Jeep Safari</p>
                    <p style={{fontSize:"18px"}}>Trekking</p>
                    <p style={{fontSize:"18px"}}>Conference Hall</p>
                    <p style={{fontSize:"18px"}}>Indoor Games</p>
                    <p style={{fontSize:"18px"}}>Shuttle Court</p>
                    <p style={{fontSize:"18px"}}>Campfire with DJ</p>
                    <p style={{fontSize:"18px"}}>Free Parking Area</p>
                </div>
                <div className="d-flex flex-column gap-2">
                    <h3 style={{fontSize:"20px",fontWeight:"700"}}>Safety & property</h3>
                    <p style={{fontSize:"18px"}}>CCTV survilance</p>
                    <p style={{fontSize:"18px"}}>Smoke alarm</p>
                </div>
                <div className="d-flex flex-column gap-2">
                    <h3 style={{fontSize:"20px",fontWeight:"700"}}>Cancellation policy</h3>
                    <p style={{fontSize:"18px"}}>Free cancellation available 3 days prior to booked date</p>
                    <p style={{fontSize:"18px"}}>Smoke alarm</p>
                    <p style={{fontSize:"18px"}}>Carbon monoxide alarm</p>
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

export default Roombooking;
