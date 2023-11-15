import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel } from "react-bootstrap";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust the number of cards accordingly
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Adjust the number of cards accordingly
  };

  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, labore
          non. Sint cum minima similique excepturi rem commodi at reiciendis
          eum? Enim ut animi a, neque eos soluta totam rem culpa deserunt
          reprehenderit earum nisi repudiandae iste consectetur tempora
          exercitationem porro voluptatum qui. Nulla eveniet est iure magnam
          beatae tempore obcaecati deserunt suscipit adipisci, quos molestiae
          unde doloremque nam, explicabo quibusdam! Non unde reiciendis
          voluptates earum quo aut excepturi eos fuga ducimus impedit.
          Aspernatur deserunt vel tempore totam amet tenetur. Sunt incidunt
          minus ullam deserunt repellendus commodi accusamus ex, veniam ab, eos
          eaque consequuntur tenetur necessitatibus voluptatibus nihil iusto
          libero.
        </p>
        <div className="position-relative">
          <div>
          <h3>Our Rooms</h3>
          <p>Comfy and Luxury rooms for all your needs</p>
          </div>
          <div className="position-absolute top-0 end-0 me-3">
            <button className="slidebtn">
              <i className="fa fa-thin fa-arrow-left"></i>
            </button>
            <button className="slidebtn">
              <i className="fa fa-thin fa-arrow-right"></i>
            </button>
          </div>
        </div>
        {/* <div className="card-group">
          <div className="card">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Villas <br />
                <span className="fw-light">6 People</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F64219cd5f1f554d95e30427536700303e6520059-5472x3648.jpg&w=640&q=75"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Suite Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F7a7c75bce14b8cb942a951b73d6f1b37581aee51-1024x683.jpg&w=640&q=75"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Deluxe with Balcony Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F825ec47f4e47ac800327e6108294a9580901d8bc-1280x853.jpg&w=640&q=75"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Deluxe Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.hotelaradhanainn.in/_next/image?url=&w=640&q=75"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body position-absolute bottom-0  bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Normal Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
          </div>
        </div> */}



        <div className="row row-cols-5 row-cols-md-5 g-4">
          <div className="col">
            <div className="card">
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75" className="card-img-top" alt="..." />
              <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
                Villas <br />
                <span className="fw-light">6 People</span>
              </p>
            </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F64219cd5f1f554d95e30427536700303e6520059-5472x3648.jpg&w=640&q=75" className="card-img-top" alt="..." />
              <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
              Suite Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F7a7c75bce14b8cb942a951b73d6f1b37581aee51-1024x683.jpg&w=640&q=75" className="card-img-top" alt="..." />
              <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
              Deluxe with Balcony Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F825ec47f4e47ac800327e6108294a9580901d8bc-1280x853.jpg&w=640&q=75" className="card-img-top" alt="..." />
              <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold mb-3">
              Deluxe Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.hotelaradhanainn.in/_next/image?url=&w=640&q=75" className="card-img-top" alt="..." />
              <div className="card-body position-absolute bottom-0 bg-secondary w-100 text-white bg-opacity-25">
              <p className="card-text fw-bold">
              Normal Room <br />
                <span className="fw-light">2 People</span>
              </p>
            </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Gallery;
