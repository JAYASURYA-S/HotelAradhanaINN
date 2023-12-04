import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Conventionhall = () => {
  return (
    <>
    <div className="position-relative w-100">
        <div className="position-relative eventheader conventionhallheader">
          <img
            src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F843db6d2981ecb6acb0c526496f4c3fecd042b84-2000x517.png&w=1920&q=75"
            alt=""
          />
          <div
            className="position-absolute top-0"
            style={{ marginTop: "130px",marginLeft:"40px" }}
          >
            <h3 style={{ color: "white",fontWeight:"500",fontSize:"45px" }}>Convention Hall</h3>
            <p style={{ color: "white", fontWeight: "400", fontSize: "30px" }}>
              The perfect lake view senate hall
            </p>
          </div>
        </div>

        <div className="d-flex flex-column gap-5" style={{marginTop:"80px"}}>
            <div className="d-flex flex-column align-items-center conventionhalldiv1">
              <h3>Create, Collaborate and celeberate</h3>
              <div>
                <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fbb50d5626e854f45808c614b04cdcc109266b22e-1529x860.jpg&w=750&q=75" style={{height:"100%",width:"100%",objectFit:"cover"}} alt="" />
              </div>
              <p>At LAKE VIEW SENATE HALL, we pride ourselves in offering custom-crafted meetings and events to delight any palate. We believe that providing responsive and engaging service will ensure that we deliver a memorable meeting. The venue, room set-up, catering and audio visuals... with so many details to consider, you need a partner who anticipates your needs before you have even thought of them. Some call it intuition. We call it the Aradhana touch.</p>
            </div>

            <div className='d-flex flex-column-reverse conventionhalldiv2 flex-md-row align-items-stretch justify-content-md-center' style={{width:"92%",margin:"0 auto",borderRadius:"9px"}}>
              <div className='d-flex flex-column gap-3 p-4 ' style={{height:"450px",width:"100%",margin:"0 auto",fontSize:"18px"}}>
                <div className='d-flex flex-column align-items-start gap-1 '>
                  <h3 style={{fontSize:"27px"}}>We offer the perfect space for</h3>
                  <ul>
                    <li>Conference and convention</li>
                    <li>Seminars</li>
                    <li>Board meetings</li>
                    <li>Retreats and off sites</li>
                    <li>Private dining events</li>
                  </ul>
                </div>
                <div className='d-flex flex-column align-items-start gap-1'>
                  <h3 style={{fontSize:"27px"}}>Our Group package includes</h3>
                  <ul>
                    <li>Meeting Room with seating for 150 persons ( Theatre style )</li>
                    <li>Meeting Wi-Fi</li>
                    <li>Audio Visual equipments</li>
                    <li>All day or part day food and non-alcoholic beverage service</li>
                    <li>Per person pricing</li>
                  </ul>
                </div>
              </div>

              <div className='h-300' style={{height:"500px",width:"100%",margin:"0 auto"}}>
              <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F931ddd72d923d1bc65d991a151d41015fdace42d-1470x980.png&w=750&q=75" style={{height:"100%",width:"100%",objectFit:"cover"}} alt="" />
              </div>
            </div>

            <div className='d-flex flex-column align-items-center mt-5 mb-3 conventionhalldiv3'>
              <h3 style={{fontSize:"32px",fontWeight:"500"}}>Event Photos & Videos</h3>
              <div style={{height:"600px",width:"90%",marginTop:"15px"}}>
                
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PF_ICIVj3u0" title="Yercaud Drone View | Cinematic Drone Shot | Hidden places in Yercaud | Places to Visit in Yercaud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
              </div>
            </div>
        </div>
        <Navbar />
        <Footer/>
      </div>
    </>
  )
}

export default Conventionhall