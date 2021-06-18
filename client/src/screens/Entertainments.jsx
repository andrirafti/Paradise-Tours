import React,{useEffect,useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel'
import { getAllEntertainment } from "../services/entertainment"
import {Link,useParams } from 'react-router-dom';
import Entertainment from '../components/Entertainment';

const Entertainments = ({onAdd}) => {
  const [entertain, setEntertainment] = useState([])
  const { location_id, hotel_id } = useParams()
  useEffect(()=>{
    const fetchEntertainment=async()=>{
      const entertainment = await getAllEntertainment(location_id,hotel_id);
      setEntertainment(entertainment)
    
      
    };
    fetchEntertainment();
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
              backgroundRepeat: 'no-repeat'
            }} src="https://lukeandsusie.com/wp-content/uploads/2019/08/Karaoke-Night-708x376.jpg" />
<Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE ENTERAINMENT</h1>
 </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>


        <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
  
    opacity: '.6',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            
          }}
            src='https://paddlinglife.com/wp-content/uploads/2020/10/EH2lk78A-1024x685.jpg' />
<Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE ENTERAINMENT</h1>
 </Carousel.Caption> 
          
        </Carousel.Item>
  <Carousel.Item>
  
          <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
 
    opacity: '0.6',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
           
          }} src="https://www.waterfrontresort.com/photogallery/large/room/gallery-hubwh-tdt-presidential-north-bed.jpg" />
          <Carousel.Caption>
<h1 style={{color:'black',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>PARADISE ENTERAINMENT</h1>
 </Carousel.Caption> 
  </Carousel.Item>
          
      </Carousel>
      <h1 style={{marginTop:'30px',textAlign:'center',fontSize:'20px',marginBottom:'30px'}}>

      DISCOVER A WORLD OF FUN AT PARADISE RESORTS
      </h1>
      <div className="thehotelparagraph" >

        <p>Daily programming and a comprehensive list of offerings and activities make it effortless to design your own perfect day. Whether you simply want to relax in any of our resort pools, explore the ocean, or venture out into the culture and excitement of Paradise Resorts and everything it has to offer.</p>
        <p>
        Snorkeling, deep sea fishing, scuba diving, kayaking, and even private yacht excursions get you out on the open waters, while onsite fitness and dance classes are also on offer. Take our fat bikes to explore the resort, or discover an array of games like darts, tennis, billiards, and even archery throughout the resort.
      </p>
      </div>

  
      {entertain.map((val) => (
    <div>
     <Link to={`/locations/${location_id}/hotels/${hotel_id}/entertainment/${val.id}/Reviews`}>
     <button>
     <FontAwesomeIcon style={{marginRight:'3px'}} icon="star"/>
       Reviews
       </button>
       </Link>
    <Entertainment val={val}
      onAdd={onAdd}
          />
          </div>
  
))}
     


      
    </div>
  )
}

export default Entertainments
