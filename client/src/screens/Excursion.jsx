import React from 'react'
import Excursions from '../components/Excursions'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel' 
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllExcursions } from '../services/excursions'
import "./Excursions.css"

const Excursion = (props) => {
  const [excursion, setExcursion] = useState([])
  const { location_id, hotel_id } = useParams()
  const {onAdd}=props
  useEffect(()=>{
    const fetchExcursion=async()=>{
      const excursions = await getAllExcursions(location_id,hotel_id);
      setExcursion(excursions);
    
      
    };
    fetchExcursion();
  }, [])
  return (
    <div>
       <Carousel pause={null} cycle={false} >
        <Carousel.Item  >
          <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
   
            opacity: '0.7',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://res.cloudinary.com/gangwaze-res/image/upload/c_fill,h_630,w_1200/v1/site/Gangwaze_Excursion_Search.jpg" />

    <Carousel.Caption>
<h1 style={{color:'white',textAlign:'center',fontSize:'20px'}}>ALL DAY EXCURSIONS AND ADVENTURES</h1>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
<h1 className="h1" style={{textAlign:'center',padding:'10px',marginTop:'20px'}}>Experience the ULTIMATE adventure </h1>
     <div  className="Excursions" >
      <p>
          Spend an afternoon snorkeling or deep sea fishing in the surrounding Caribbean/Balkan waters, master a new skill at our culinary and dance classes, or explore the resort on one of our fat bikes. Whatever your preference or hobby, Paradise Resorts  has the perfect option waiting for you.
        </p>
        <p>With six swimming pools, various water sports, a variety of fitness and activities classes, and classic games housed throughout the resort, there is something to make every moment perfect at Excellence Riviera Cancun. Here, activities meet all-suite accommodations and endless cocktails.</p>
      </div>
       <hr></hr>



      {excursion.map(val => (
        
        <Excursions
          
          val={val}
          onAdd={onAdd}
        />
        ))
      }
    </div>
  )
}

export default Excursion
