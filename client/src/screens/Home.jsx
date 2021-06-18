import React, { useState,useEffect }from 'react'
import {Link} from 'react-router-dom'
import "../components/Paradise.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel' 
import "./Home.css"
const Home = () => {
 
  

  // let beachpics=["https://www.sandals.com/blog/content/images/2020/02/Sandals-Royal-Bahamian-Ocean-Hammock.jpg","https://www.beach.com/wp-content/uploads/2018/05/bahamas-1720653_960_720-730x410.jpg","https://i2.wp.com/euroviajar.com/wp-content/uploads/2019/05/Best-beaches-in-Albania-Gjipe-beach-Albania.jpg?fit=2220%2C1480&ssl=1","https://lp-cms-production.imgix.net/features/2015/05/shutterstock_650401288-df2c79d3bbf2.jpg?format=auto"]
  // let randombeach=Math.floor(Math.random()*beachpics.length)
  // let ChoosenBeach=beachpics[randombeach]
  return (
    <body>

      
      <div >
        
        <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
Loading  </div>
</div>

        
        
        <Carousel className="carousel" pause={null} cycle={true} >
        <Carousel.Item  >
          <img  className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://www.sandals.com/blog/content/images/2019/10/4-Cabbage-beach-Paradise-Island-Nassau-Bahamas.jpg" />

    <Carousel.Caption>
              <h1 style={{ color: 'white', textAlign: 'center', fontSize: '50px' }}>Bahamas</h1>
 </Carousel.Caption> 
  </Carousel.Item>
  <Carousel.Item>
  
          <img className="IMG"  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://www.sandals.com/blog/content/images/2020/02/Sandals-Royal-Bahamian-Ocean-Hammock.jpg" />
          <Carousel.Caption>
<h1 style={{color:'white',textAlign:'center',fontSize:'50px'}}>Bahamas</h1>

            </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="IMG"  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
           }} src="https://lp-cms-production.imgix.net/features/2015/05/shutterstock_650401288-df2c79d3bbf2.jpg?format=auto"/>
            <Carousel.Caption>
              
<h1 style={{color:'white',textAlign:'center',fontSize:'50px'}}>Albania</h1>                
            </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        </div>
      <h1 className="Paradise">The Paradise Collection,for adults 
      <h1><Link style={{border:'1px solid black',color:'black',marginTop:'20px',textDecoration:'underline'}} to="/locations">Discover The Details</Link> </h1>
        </h1>
      <div >
      <p>Immerse yourself in dazzling tropical scenery brimming with amenities when you stay with us at the best All Inclusive resorts in the Caribbean and Balkan Seas. This website was created for travelers who seek a glorious getaway in a ravishing oasis, Paradise Collection Resorts has multiple All-Inclusive Resorts providing all you need for an adults only escape. All-premium drinks and gourmet cuisine await with our above-the-curve All Inclusive plan, while each resort has an all-inclusive Spa  to provide a sanctuary of hydrotherapy and soothing rituals for their beloved members.
      </p>
      <p>
          From refreshing swim-up suites, enchanting rooftop terrace suites, and mesmerizing villas with their own private beaches, to the vibrant exclusivity of the Paradise Club, we invite you to step into our empyrean all-suite accommodations found across our selection of Caribbean and Balkan beach resorts.  So come, escape, gaze out over the Caribbean/Balkan Sea, and prepare to lose yourself in extraordinary relaxation when you book your next stay with Paradise Collections.
      </p>

      </div>
      
      </body>
  )
}

export default Home
