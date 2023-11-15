import React, { useState } from 'react'

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
    <div className="d-flex flex-column yercaud mt-5">
          <h3
            className="text-center mb-5"
          >
            Explore beauty of Yercaud
          </h3>
          <div className="d-flex justify-content-center justify-content-md-start ms-0 ms-md-5">
            <div>
              <button onClick={()=>showAbout()} style={{backgroundColor:"transparent",border:"none"}}><h5 className="border-dark border-end pe-3">About Yercaud</h5></button>
            </div>
            <div>
              <button onClick={()=>showPlaces()} style={{backgroundColor:"transparent",border:"none"}}><h5 className="ms-3">Nearby Places</h5></button>
            </div>
          </div>
          <div className="d-flex flex-column yercaudCard mt-5 ms-md-5">

            {aboutYercaud && <div className="d-flex flex-column flex-md-row justify-content-center " style={{overflow:"hidden"}}>
              <div className="card position-relative mb-3" style={{borderRadius:"20px",overflow:"hidden"}}>
                <div className="row g-0 ">
                  <div className="col-md-6 yercaudcardImg fade-out position-relative" >
                    <div className="w-100 h-100">
                    <img src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F00b9c57037c880e47ffc762abf1cb9c9b8b21510-1200x614.jpg&w=1200&q=75" className="img-fluid rounded-start w-100 h-100"  alt="..." />
                    </div>
                    <div className="d-flex justify-content-between yercaudDesc position-absolute bottom-0 p-2" style={{color:"white"}}>
                        <h5>Karadaiyur View Point</h5>
                        <h5>15min</h5>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-4 p-0" style={{height:"100%"}}>
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

            {nearbyPlaces && <div className='d-flex flex-wrap align-items-stretch gap-5'>
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

            <div>
                <div></div>
                <div></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Explore