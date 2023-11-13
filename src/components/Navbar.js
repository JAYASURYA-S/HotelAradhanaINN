import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent w-100 position-absolute top-0 px-4" style={{backgroundColor:"transparent"}}>
        <div className="container-fluid">
          <Link to="/"><img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ffc71f93788141be9fd93a94f4d74e8272cbf88c9-240x200.png&w=128&q=75" alt="....." className="rounded-3"/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ps-4">
                <Link to="/"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Overview</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/rooms"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Rooms</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/restaurant"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Restaurant</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/conventionhall"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Convention Hall</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/gallery"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Gallery</Link>
              </li>
              <li className="nav-item ps-4 me-4">
                <Link to="/events"  style={{textDecoration:"none",color:"white",fontSize:'25px'}}>Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
