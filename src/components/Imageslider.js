import React, { useState } from "react";
import "../components/Imageslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

        <button className="slidebtn leftbtn" style={{position:"absolute",top:"-60px",right:"90px"}} onClick={onClick}>
        <i className="fa fa-thin fa-arrow-left"></i>
      </button>
      
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (

        <button className="slidebtn rightbtn" style={{position:"absolute",top:"-60px",right:"30px"}} onClick={onClick}>
        <i className="fa fa-thin fa-arrow-right"></i>
      </button>
    );
  }


const Imageslider = () => {

  const data = [
    {
        title:"Villas",
        people:"6 People",
        img:"https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75"
    },
    {
        title:"Suite Room",
        people:"2 People",
        img:"https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F5246b45fda14b52e3d119e3573fe444152ca57aa-6960x4640.jpg&w=640&q=75"
    },
    {
        title:"Deluxe with Balcony Room",
        people:"2 People",
        img:"https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F868f5745dde4cd414f000fe8688e5c23dc063058-6960x4640.jpg&w=640&q=75"
    },
    {
        title:"Deluxe Room",
        people:"2 People",
        img:"https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F0cfa6427d5910ee28b6bd7315555b36eb549cc94-6960x4640.jpg&w=640&q=75"
    },
    {
        title:"People",
        people:"2 People",
        img:"https://www.hotelaradhanainn.in/_next/image?url=&w=640&q=75"
    },
  ]


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
    initialSlide: 0,
    customStyle: {
        width: "900px !important" // Set your desired width for each slide
      },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },       
    ]
  };

  return (
    <>
      {/* <div className="slider-container">
        <div className="slider-wrapper">
        <div className="position-absolute top-0 end-0 me-3">
                <button className="slidebtn" onClick={prevSlide}>
                  <i className="fa fa-thin fa-arrow-left"></i>
                </button>
                <button className="slidebtn" onClick={nextSlide}>
                  <i className="fa fa-thin fa-arrow-right"></i>
                </button>
              </div>
            <div className="image-list">
                {images.map((image,index)=>{
                    return <img key={index} src={image} alt="" className="image-item"/>
                })}
            </div>
        </div>
      </div> */}


       <div className="imagesliderContainer" style={{width:"100%"}}>
       <Slider {...settings}>

        {data.map((item) =>(
            <div className="card slidercard">
                <div className="card-top">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="ourRoomsdetails">
                    <h3>{item.title}</h3>
                    <p>{item.people}</p>
                </div>
            </div>
        ))}

        
         {/* <div className="ourRoomsdetailsimg">
           <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
           <div className="ourRoomsdetails">
            <h3>Villas</h3>
            <p>6 People</p>
           </div>
         </div>
         <div className="ourRoomsdetailsimg">
           <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F5246b45fda14b52e3d119e3573fe444152ca57aa-6960x4640.jpg&w=640&q=75" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
           <div className="ourRoomsdetails">
            <h3>Suite Room</h3>
            <p>2 People</p>
           </div>
         </div>
         <div className="ourRoomsdetailsimg">
           <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F868f5745dde4cd414f000fe8688e5c23dc063058-6960x4640.jpg&w=640&q=75" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
           <div className="ourRoomsdetails">
            <h3>Deluxe with Balcony Room</h3>
            <p>2 People</p>
           </div>
         </div>
         <div className="ourRoomsdetailsimg">
           <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F0cfa6427d5910ee28b6bd7315555b36eb549cc94-6960x4640.jpg&w=640&q=75" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
           <div className="ourRoomsdetails">
            <h3>Deluxe Room</h3>
            <p>2 People</p>
           </div>
         </div>
         <div className="ourRoomsdetailsimg">
           <img src="https://www.hotelaradhanainn.in/_next/image?url=&w=640&q=75" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
           <div className="ourRoomsdetails">
            <h3>People</h3>
           </div>
         </div> */}
       </Slider>
     </div>

    </>
  );
};

export default Imageslider;
