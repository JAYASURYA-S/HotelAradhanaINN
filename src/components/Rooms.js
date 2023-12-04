import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import rooms from "./RoomsData";

const Rooms = () => {

  return (
    <>
      <div className="position-relative">
        <div className="position-relative roomsheader">
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F843db6d2981ecb6acb0c526496f4c3fecd042b84-2000x517.png&w=1920&q=75"
            alt=""
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

        <div className="mt-5" style={{ padding: "4rem" }}>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-wrap align-items-end gap-4">
              <div
                className="d-flex align-items-stretch gap-5 px-3 p-3 datecheck"
                style={{
                  width: "500px",
                  border: "1px solid rgba(202, 206, 211,1)",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="d-flex flex-column gap-3 px-1 px-md-3 py-1 "
                  style={{ width: "200px" }}
                >
                  <h6 style={{ fontSize: "12px", fontWeight: "600" }}>
                    Maximun guests
                  </h6>
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "rgb(209 213 219)",
                      cursor: "not-allowed",
                    }}
                  >
                    2 People
                  </h3>
                </div>
                <div
                  className="d-flex flex-column gap-2 px-3 px-md-5 py-1"
                  style={{ width: "100%" }}
                >
                  <h6 style={{ fontSize: "12px", fontWeight: "600" }}>
                    Check In and Check Out
                  </h6>
                  <input
                    type="date"
                    style={{
                      border: "1px solid rgb(209 213 219)",
                      padding: "5px 8px",
                      width: "90%",
                      height: "40px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 pb-2 roomsbtns">
                <button>Search</button>
                <button>Reset</button>
              </div>
            </div>

            <div className="roomscard">
              {rooms.map((room,index) => {
                return (
                  <Link to={`/rooms/${room.id}`}>
                  <div
                    key={index}
                    className="d-flex flex-column align-items-stretch justify-content-between gap-3"
                    style={{
                      width: "100%",
                      maxWidth: "72rem",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: "1px solid rgb(202 206 211)",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="d-flex flex-column align-items-start flex-grow-1 gap-2">
                      <div
                        className="position-relative roomimg"
                        style={{ width: "100%", height: "200px" }}
                      >
                        <img
                          src={room.img}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div className="position-absolute mt-3 me-3 top-0 end-0">
                          <div
                            className="px-4 py-2"
                            style={{
                              color: "white",
                              backgroundColor: "rgb(208 174 113)",
                              borderRadius: "0.1rem",
                            }}
                          >
                            <span style={{ fontSize: "16px" }}>
                              {room.offer} off
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="d-flex align-items-start justify-content-between gap-4 p-4 pt-2"
                        style={{ width: "100%" }}
                      >
                        <div className="d-flex flex-column gap-1">
                          <div className="d-flex flex-column gap-1">
                            <h3
                              style={{
                                color: "rgb(46 37 21)",
                                fontSize: "20px",
                                fontWeight: "700",
                              }}
                            >
                              {room.title}
                            </h3>
                            <div className="d-flex align-items-center gap-4">
                              <div className="d-flex align-items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-person-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <p
                                  className="pt-3"
                                  style={{
                                    color: "rgb(46 37 21)",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {room.people} People
                                </p>
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <span
                                  class="glyphicon glyphicon-bed"
                                  style={{ fontSize: "1.4rem" }}
                                ></span>
                                <p
                                  className="pt-3"
                                  style={{
                                    color: "rgb(46 37 21)",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {room.bed} King size
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
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
                                ₹{room.price}
                              </p>
                              <div className="d-flex align-items-center gap-1">
                                <p
                                  style={{
                                    fontSize: "16px",
                                    color: "rgb(46 37 21)",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "20px",
                                      color: "rgb(46 37 21)",
                                      fontWeight: "600",
                                    }}
                                  >
                                    ₹{" "}
                                    <strong
                                      style={{
                                        fontSize: "24px",
                                        color: "rgb(46 37 21)",
                                        fontWeight: "700",
                                      }}
                                    >
                                      {room.offerprice}{" "}
                                      <span
                                        style={{
                                          fontSize: "16px",
                                          color: "rgb(46 37 21)",
                                          fontWeight: "400",
                                        }}
                                      >
                                        per night
                                      </span>
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <h6
                            style={{
                              fontSize: "20px",
                              color: "rgb(46 37 21)",
                              fontWeight: "600",
                            }}
                          >
                            {room.rating}
                          </h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                            color="#FDCC0D"
                            className="mb-2"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default Rooms;
