import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  const allimages = [
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=2048&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fe30141c07926e18dd3870bd42900ce590f4408e2-5472x3648.jpg&w=2048&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb48d70f708042e1bbc6bc65597ed89f792071970-5616x3744.jpg&w=2048&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F53618dae2bf559e4398d626ed3b52d67a6717f0a-3264x2448.jpg&w=2048&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fcfdb6090da09a153506c9e9b0dc590416b480a16-259x194.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F624892fc6fd325bc3ec7beaf03683f31ac225eca-299x168.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb0944c876d32b48a04423f0cc3cb06832bb5a7c1-1529x860.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Faa8b383f862b0f929588bffb8ece57ed054b4d6d-303x227.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fbc3feebbc58a8b89d3a92ab2ad2e5692bdf7de83-1518x860.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ff3d0ffccf392fb85f28cf68eaf392a49af581765-1146x860.jpg&w=1920&q=75",
    "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2ea17fb3608b7acb1addfa1af3a54e1071fdc848-1529x860.jpg&w=1920&q=75",
  ];

  const images = [
    {
      title: "Accomodation",
      images: [
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F762319acdd68a3e1f9d7e3d59acb719d93b388a4-5616x3744.jpg&w=2048&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fe30141c07926e18dd3870bd42900ce590f4408e2-5472x3648.jpg&w=2048&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb48d70f708042e1bbc6bc65597ed89f792071970-5616x3744.jpg&w=2048&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F53618dae2bf559e4398d626ed3b52d67a6717f0a-3264x2448.jpg&w=2048&q=75",
      ],
    },
    {
      title: "Dining",
      images: [
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fcfdb6090da09a153506c9e9b0dc590416b480a16-259x194.jpg&w=1920&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F624892fc6fd325bc3ec7beaf03683f31ac225eca-299x168.jpg&w=1920&q=75",
      ],
    },
    {
      title: "Convention Hall",
      images: [
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fb0944c876d32b48a04423f0cc3cb06832bb5a7c1-1529x860.jpg&w=1920&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Faa8b383f862b0f929588bffb8ece57ed054b4d6d-303x227.jpg&w=1920&q=75",
      ],
    },
    {
      title: "Experiences",
      images: [
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fbc3feebbc58a8b89d3a92ab2ad2e5692bdf7de83-1518x860.jpg&w=1920&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ff3d0ffccf392fb85f28cf68eaf392a49af581765-1146x860.jpg&w=1920&q=75",
        "https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2ea17fb3608b7acb1addfa1af3a54e1071fdc848-1529x860.jpg&w=1920&q=75",
      ],
    },
  ];

  const [gallerybtn, setGallerybtn] = useState(false);
  const [galleryselect, setGalleryselect] = useState("All Photos");
  const [galleryselectOpenclose, setGalleryselectOpenclosed] = useState(false);

  const btnanimation = () => {
    setGallerybtn(!gallerybtn);
    setGalleryselectOpenclosed(!galleryselectOpenclose);
  };

  const btnvaluesChange = (value) => {
    setGalleryselect(value);
    setGallerybtn(!gallerybtn);
    setGalleryselectOpenclosed(!galleryselectOpenclose);
  };

  const btnlistChange = (value) => {
    setGalleryselect(value);
  };

  const newItems = images.filter((item) => {
    return item.title === galleryselect;
  });

  const newItemsImages = newItems.map((item) => item.images);

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

        <div className="px-12">
          <div className="my-5 position-relative" style={{ width: "100%" }}>
            <div
              className="d-flex justify-content-between align-items-center display-none"
              onClick={() => {
                btnanimation();
              }}
              style={{
                width: "100%",
                height: "48px",
                cursor: "pointer",
                borderRadius: "8px",
                border: "1px solid rgb(202 206 211)",
                backgroundColor: "white",
                padding: "16px",
              }}
            >
              <h3
                style={{
                  color: "rgb(46 37 21)",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {galleryselect}
              </h3>
              <div>
                {!gallerybtn && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                )}

                {gallerybtn && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7 14l5-5 5 5z"></path>
                  </svg>
                )}
              </div>
            </div>

            {galleryselectOpenclose && (
              <div
                className="position-absolute d-flex flex-column"
                style={{
                  right: "0",
                  top: "54px",
                  left: "0",
                  zIndex: "111",
                  borderRadius: "8px",
                  border: "1px solid rgb(202 206 211)",
                  backgroundColor: "white",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <p
                    onClick={() => btnvaluesChange("All Photos")}
                    name="All Photos"
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                      lineHeight: "26px",
                    }}
                  >
                    All Photos
                  </p>
                </div>
                <div style={{ padding: "16px" }}>
                  <p
                    onClick={() => btnvaluesChange("Accomodation")}
                    name="Accomodation"
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                      lineHeight: "26px",
                    }}
                  >
                    Accomodation
                  </p>
                </div>
                <div style={{ padding: "16px" }}>
                  <p
                    onClick={() => btnvaluesChange("Dining")}
                    name="Dining"
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                      lineHeight: "26px",
                    }}
                  >
                    Dining
                  </p>
                </div>
                <div style={{ padding: "16px" }}>
                  <p
                    onClick={() => btnvaluesChange("Convention Hall")}
                    name="Convention Hall"
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                      lineHeight: "26px",
                    }}
                  >
                    Convention Hall
                  </p>
                </div>
                <div style={{ padding: "16px" }}>
                  <p
                    onClick={() => btnvaluesChange("Experiences")}
                    name="Experiences"
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                      lineHeight: "26px",
                    }}
                  >
                    Experiences
                  </p>
                </div>
              </div>
            )}
          </div>






          <div
            className="d-flex flex-wrap display-md-none"
            style={{ gap: "48px", padding: "48px 0px" }}
          >
            <div
              style={{ borderRight: "1px solid #ccc", paddingRight: "40px" }}
              onClick={() => btnlistChange("All Photos")}
            >
              <p style={{ fontSize: "24px", cursor: "pointer" }}>All Photos</p>
            </div>
            <div
              style={{ borderRight: "1px solid #ccc", paddingRight: "40px" }}
              onClick={() => btnlistChange("Accomodation")}
            >
              <p style={{ fontSize: "24px", cursor: "pointer" }}>
                Accomodation
              </p>
            </div>
            <div
              style={{ borderRight: "1px solid #ccc", paddingRight: "40px" }}
              onClick={() => btnlistChange("Dining")}
            >
              <p style={{ fontSize: "24px", cursor: "pointer" }}>Dining</p>
            </div>
            <div
              style={{ borderRight: "1px solid #ccc", paddingRight: "40px" }}
              onClick={() => btnlistChange("Convention Hall")}
            >
              <p style={{ fontSize: "24px", cursor: "pointer" }}>
                Convention hall
              </p>
            </div>
            <div
              style={{ borderRight: "1px solid #ccc", paddingRight: "40px" }}
              onClick={() => btnlistChange("Experiences")}
            >
              <p style={{ fontSize: "24px", cursor: "pointer" }}>Experiences</p>
            </div>
          </div>





          <div style={{ width: "100%", height: "100%" }}>
            <div
              className="galleryimgView"
              style={{ width: "100%", paddingBottom: "40px", gap: "54px" }}
            >
              {galleryselect === "All Photos" &&
                allimages.map((item, index) => (
                  <div
                    style={{
                      width: "100%",
                      height: "224px",
                      position: "relative",
                    }}
                    key={index}
                  >
                    <img
                      src={item}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </div>
                ))}

              {newItems.map((section, index) => (
                <>
                  {section.images.map((item, index) => {
                    return (
                      <div
                        style={{
                          width: "100%",
                          height: "224px",
                          position: "relative",
                        }}
                        key={index}
                      >
                        <img
                          src={item}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            color: "transparent",
                          }}
                        />
                      </div>
                    );
                  })}
                </>
              ))}
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
