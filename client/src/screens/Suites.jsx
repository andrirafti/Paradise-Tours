import React,{useEffect,useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel'
import { getAllSuites } from "../services/suites"
import {Link,useParams } from 'react-router-dom';
import Suite from "../components/Suite"

const Suites = ({onAdd}) => {
  const [suite, setSuites] = useState([])
  const { location_id, hotel_id } = useParams()
  useEffect(()=>{
    const fetchSuites=async()=>{
      const suites = await getAllSuites(location_id,hotel_id);
      setSuites(suites)
    
      
    };
    fetchSuites();
  }, [])
  
  
  return (
    <div >
       <Carousel pause={null} cycle={true} >
        <Carousel.Item  >
          <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
   
    opacity: '0.6',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
           }} src="https://www.theoceanac.com/wp-content/uploads/2019/04/header-studio-suite.jpg" />
<Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE SUITES</h1>
 </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>


        <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
 
    opacity: '.6',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat'
           
          }}
            src='https://www.sandals.com/blog/content/images/2019/12/Beachfront-Swim-Up-Millionaire-One-Bedroom-Butler-Suite1_n.jpg' />
<Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE SUITES</h1>
 </Carousel.Caption> 
          
        </Carousel.Item>
  <Carousel.Item>
  
          <img  className="IMG"style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    
    opacity: '0.6',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
           
          }} src="https://www.waterfrontresort.com/photogallery/large/room/gallery-hubwh-tdt-presidential-north-bed.jpg" />
          <Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE SUITES</h1>
 </Carousel.Caption> 
  </Carousel.Item>
          
  </Carousel>
      
      <header>
        <h2 style={{textAlign:'center',marginTop:'20px'}}>Why us:</h2>
        <div className="thehotelparagraph">
          <p>
          Seek adventure, revel in a romantic getaway, and find your next perfect vacation escape when staying in our elevated suites, a world apart where you can fully relax and unwind in the privacy of the seaside sanctuary that we have tailored for you at Paradise Resorts.
        </p>
        <p>
            With choices like swim-up suites, private pools, rooftop terraces, Caribbean Sea views, and our famed Paradise Club categories, here you can give in to the privacy of expansive and upscale accommodations. These suites set us among the top hotels for adults only in the entire destination.
        </p>
          </div>
  </header>
  <hr></hr>
      {suite.map((val) => (
    <div >
     <Link to={`/locations/${location_id}/hotels/${hotel_id}/Suites/${val.id}/Reviews`}>
     <button>
     <FontAwesomeIcon style={{marginRight:'3px'}} icon="star"/>
       Reviews
       </button>
       </Link>
    <Suite val={val}
      
      onAdd={onAdd}
          />
          </div>
  
))}
     


      
    </div>
  )
}

export default Suites
