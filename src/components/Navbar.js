import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [showdropdown,setShowdropdown] = useState(false);

  const dropdown = () => {
    setShowdropdown(!showdropdown);
  }
  return (
    <>
      <div
        className="position-absolute"
        style={{
          top: "0",
          background: "transparent",
          width: "100%",
          padding: "10px 32px",
          zIndex: "20",
        }}
      >
        <div
          className="newNavbar"
          style={{
            padding: "10px 8px",
            background: "transparent",         
          }}
        >
          <div
            className="d-flex justify-content-between flex-wrap align-items-center"
            style={{ margin: "0 auto" }}
          >
            <a href="/" style={{color:'inherit',textDecoration:"none"}}>
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ffc71f93788141be9fd93a94f4d74e8272cbf88c9-240x200.png&w=256&q=75" alt="" style={{color:"transparent",objectFit:"cover",borderRadius:"8px",height:"96px"}}/>
            </a>

            <button
            className="navbarbtncollapse"
              style={{
                color: "rgb(107 114 128)",
                fontSize: "14px",
                padding: "8px",
                backgroundColor: "white",
                borderRadius: "8px",
                alignItems:"center",
                width:"40px",
                height:"40px",
                display:"inline-flex",
                cursor:"pointer",
              }}
              onClick={dropdown}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                style={{
                  height: "24px",
                  width: "24px",
                  flexShrink: "0",
                  fill: "currentcolor",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                ></path>
              </svg>
            </button>

            {showdropdown && <div style={{paddingBottom:"20px",backgroundColor:"white",width:"100%"}}>
              <ul style={{display:"flex",flexDirection:"column",marginTop:"16px",listStyle:"none"}}>
                <a href="/" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Overview</a>
                <a href="/rooms" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Rooms</a>
                <a href="/restaurant" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Restaurant</a>
                <a href="/conventionhall" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Convention Hall</a>
                <a href="/gallery" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Gallery</a>
                <a href="/events" style={{color:"black",fontWeight:"600",fontSize:"20px",padding:"0 16px",textDecoration:"none"}}>Events</a>
              </ul>
            </div>}

            <div className="navbarbeforecollapse" style={{paddingBottom:"20px",backgroundColor:"transparent"}}>
              <ul style={{display:"flex",flexDirection:"row",marginTop:"16px",listStyle:"none"}}>
                <a href="/" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Overview</a>
                <a href="/rooms" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Rooms</a>
                <a href="/restaurant" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Restaurant</a>
                <a href="/conventionhall" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Convention Hall</a>
                <a href="/gallery" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Gallery</a>
                <a href="/events" style={{color:"white",fontWeight:"600",fontSize:"23px",padding:"0 16px",textDecoration:"none"}}>Events</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
