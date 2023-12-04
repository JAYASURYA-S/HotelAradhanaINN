import React, { useState } from 'react'
import Reviewform from './Reviewform'

const Explore = () => {

    const [aboutYercaud,setAboutYercaud] = useState(true)
    const [nearbyPlaces,setNearbyPlaces] = useState(false)

    const showAbout =() =>{
        setAboutYercaud(true)
        setNearbyPlaces(false)
    }

    const showPlaces =() =>{
        setAboutYercaud(false)
        setNearbyPlaces(true)
    }


  return (
    <>
    <div className="d-flex flex-column yercaud mt-5" style={{width:"100%"}}>
          <h3
            className="text-center mb-5"
          >
            Explore beauty of Yercaud
          </h3>
          <div className="d-flex justify-content-center justify-content-md-start ms-0 ms-md-5">
            <div>
              <button onClick={()=>showAbout()} className={`${aboutYercaud && 'dark'}`} style={{backgroundColor:"transparent",border:"none"}}><h5 className="border-dark border-end pe-3">About Yercaud</h5></button>
            </div>
            <div>
              <button onClick={()=>showPlaces()} className={`${nearbyPlaces && 'dark'}`} style={{backgroundColor:"transparent",border:"none"}}><h5 className="ms-3">Nearby Places</h5></button>
            </div>
          </div>
          <div className="d-flex flex-column yercaudCardContainer mt-5 ms-md-5">

            {aboutYercaud && <div className="d-flex flex-column w-100 flex-md-row justify-content-center " style={{overflow:"hidden"}}>
              <div className="card yercaudcard position-relative mb-3" style={{borderRadius:"20px",overflow:"hidden"}}>
                <div className="row g-0 w-100">
                  <div className="col-md-6 yercaudcardImg fade-out position-relative" >
                    <div className="karamadaiyurimg" style={{width:"100%",height:"100%"}}>
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F00b9c57037c880e47ffc762abf1cb9c9b8b21510-1200x614.jpg&w=1200&q=75" className="img-fluid rounded-start " style={{width:"100%",height:"100%"}}  alt="..." />
                    </div>
                    <div className="d-flex justify-content-between yercaudDesc position-absolute bottom-0 p-2" style={{color:"white"}}>
                        <h5>Karadaiyur View Point</h5>
                        <h5>15min</h5>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-4 p-0" style={{}}>
                    <div className="card-body aboutYercaud">
                      <h5 className="card-title">About yercaud</h5>
                      <p className="card-text">
                      Yercaud is a hill station in Salem District, in Tamilnadu, India. It is located in the Shevaroys range of hills in the Eastern Ghats. It is situated at an altitude of 1515 meters (4970 ft) above sea level, and the highest point in Yercaud is the Shevarayan temple at 5,326 feet (1,623 m). The hill station is named owing to the abundance of forest near the lake, The name signifying Lake Forest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

            {nearbyPlaces && <div className='d-flex flex-wrap align-items-stretch gap-4 gap-md-5'>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F00b9c57037c880e47ffc762abf1cb9c9b8b21510-1200x614.jpg&w=828&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Boat House</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F5361dbf735acfdc97077b05b94e1465c853b07bf-640x428.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Pagoda Point</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Ff6ba8866b020369b1e1d906c5742230d984f8fbd-500x281.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Botanical Garden</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F6d1adf1e4dc6ca3ee68dd0a9a385928e4490dab3-500x375.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Anna Park</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fe108d68920ecc1efceb4fb5b64d7697b3b4cda93-661x380.png&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Lady's Seat</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Faf5b77e13cd9906530d9f1f306ba53171f727127-500x375.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Killiyur Falls</h4>
                    </div>
                </div>
                <div className='position-relative aboutplaces'>
                    <div>
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F98edd3f5f22065449d436414533a3f6ac65a702c-1200x676.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='position-absolute bottom-0'>
                        <h4>Shevaroy Hills</h4>
                    </div>
                </div>
            </div>}

            <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-md-5' style={{marginTop:"70px",width:"100%"}}>
                <div className='d-flex flex-column gap-2 mx-md-0' style={{width:"100%"}}>
                    <div className='d-flex flex-column aradhanainncontent gap-2'>
                        <h3>Hotel Aradhana Inn</h3>
                        <p>Hotel Aradhana Inn, tucked amidst dense tall silver oak trees and lush greenery on a picturesque hill overlooking the Lake in Yercaud, a small coffee plantation town, atop the Shevaroyan Hills, is an ideal place to those looking for a quiet and cosy accommodation. Poised on a hill overlooking the Big Lake, it commands a stunning view of the Lake and the surrounding plantations that grace the mountains. Hotel Aradhana Inn offers a choice of accommodations to match your needs - whether you need an inviting room for your work travels or a spacious suite for a family getaway, or cosy rooms for an exciting group get together or comfortable rooms to organize a conference, our accommodations have you covered.</p>
                    </div>

                    <div className='d-flex flex-column yatraicon gap-4'>
                        <div className='d-flex align-items-center gap-3'>
                            <a href="https://www.yatra.com/hotels/hotels-in-yercaud/hotel-aradhana-inn">
                                <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Fc73e8bcf1de10521f1b4be783c18838f21b78318-773x407.png&w=64&q=75" alt="" />
                            </a>
                            <a href="https://www.makemytrip.com/hotels/hotel_aradhana_inn-details-yercaud.html">
                                <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F07b09d1f51e9edd994ff4745ffb1c9a58d4d3c5d-50x50.png&w=64&q=75" alt="" />
                            </a>
                            <a href="https://www.booking.com/hotel/in/aradhana-inn.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIMYXJhZGhhbmEtaW5uSDNYA2hsiAEBmAEJuAEYyAEM2AED6AEBiAIBqAIEuALo3cqoBsACAdICJDEzNjU0YTdkLWY1NjgtNGFjOS1iNDc5LTg5MjY4MThhMDI5Y9gCBOACAQ&sid=00afaa8013e14988700b66f7eed8cefd&dist=0&keep_landing=1&sb_price_type=total&type=total&">
                                <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F0f01bdd93f22ee9d89dc0263ea18707d0b893398-52x50.png&w=64&q=75" alt="" />
                            </a>
                            <a href="https://www.goibibo.com/hotels/aradhana-inn-hotel-in-yercaud-1904012113122390023/">
                                <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F44c5084dfd9044d8594dbe767d47904499f63aac-396x118.png&w=64&q=75" alt="" />
                            </a>
                        </div>
                        <div className='averagereview'>
                            <p>Average Review - <span>4.2</span></p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row align-items-center justify-content-end gap-md-5 mt-md-4 aradhanainnimg mt-3'>
                   
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2Feea0d4e6c77ed76d04d5744c532b7cd676dbeecf-1024x683.jpg&w=384&q=75" alt="" />
                    
                    
                        <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2fcce6f01256c2d901e38ab6d7fdf5f6e87e04a5-1024x683.jpg&w=640&q=75" alt="" />
                    
                </div>
            </div>
          </div>
        </div>
        {/* <Reviewform/> */}

        
    </>
  )
}

export default Explore