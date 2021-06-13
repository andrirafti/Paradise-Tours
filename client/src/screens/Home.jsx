import React, { useState,useEffect }from 'react'
import { Container, ProgressBar } from 'react-bootstrap'
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

        
        
        <Carousel pause={null} cycle={true} >
        <Carousel.Item  >
          <img  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: '1',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            height:'500px'}} src="https://www.sandals.com/blog/content/images/2019/10/4-Cabbage-beach-Paradise-Island-Nassau-Bahamas.jpg" />

    <Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'50px'}}>Bahamas</h1>
 </Carousel.Caption> 
  </Carousel.Item>
  <Carousel.Item>
  
          <img style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: '1',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            height:'500px'}} src="https://www.sandals.com/blog/content/images/2020/02/Sandals-Royal-Bahamian-Ocean-Hammock.jpg" />
          <Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'50px'}}>Bahamas</h1>
 </Carousel.Caption> 
  </Carousel.Item>
  <Carousel.Item>
    <img style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: '1',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            height:'500px'}} src="https://lp-cms-production.imgix.net/features/2015/05/shutterstock_650401288-df2c79d3bbf2.jpg?format=auto"/>
    <Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'50px'}}>Albania</h1>
 </Carousel.Caption> 
      </Carousel.Item>
</Carousel> 
        </div>
      </body>
  )
}

export default Home
