import React from "react";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row footer align-items-top justify-content-between gap-3 gap-md-5">
        <div className="d-flex align-items-top footerfirst justify-content-between justify-content-md-start">
          <div className="footericonimg">
            <a href="/">
              <img
                src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ffc71f93788141be9fd93a94f4d74e8272cbf88c9-240x200.png&w=256&q=75"
                alt=""
                style={{width:"120px",height:"100px",objectFit:"cover",borderRadius:"10px"}}
              />
            </a>
            <div className="d-flex align-items-center my-2 gap-3">
              <a href="https://www.facebook.com/people/Aradhana/pfbid02V4GRsMkc3rhMQWohsADpYmp7jeGgf5b3zS7uFSa8En6JFuRQcu88tR3VHphX4K1ol/">
                <img
                  src="https://cdn.sanity.io/images/so7v7vzh/production/83109291132b46f4542fe1573a83797ec5fb8320-27x27.svg"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/king_of_aradhana_ycd/">
                <img
                  src="https://cdn.sanity.io/images/so7v7vzh/production/acfef0d110f1f91006958795c7ca47eb2b779b97-28x27.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start footerlist justify-content-start gap-2">
            <a href="/">Overview</a>
            <a href="/rooms">Rooms</a>
            <a href="/conventionhall">Convention Hall</a>
            <a href="/gallery">Gallery</a>
          </div>
        </div>

        <div className="d-flex flex-column footeraddress align-items-end justify-content-start gap-2 mt-md-0 mt-5">
          <div style={{fontSize:"20px"}}>
            <p className="text-end">1, 214, Kamaraj Rd, Yercaud, <br />Tamil Nadu 636602.</p>
          </div>
          <a href="https://www.google.com/maps/place/11%C2%B047'15.8%22N+78%C2%B012'19.6%22E/@11.787727,78.2028753,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.787727!4d78.2054502?entry=ttu" className="d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>View Location</span>
          </a>
          <a href="tel:9445905500">9445905500</a>
          <a href="tel:04281-223521/23">
            Help desk landline: 04281-223521/23
          </a>
          <a href="mailto:reception@aradhanainn.co.in">reception@aradhanainn.co.in</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
