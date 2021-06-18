import React from 'react'
import Hotels from '../components/Hotels'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllHotels } from '../services/hotels'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import Carousel from 'react-bootstrap/Carousel' 
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./Hotel.css"


const Hotel = (props) => {
  const [hotel, setHotel] = useState([])
  const { location_id } = useParams()
  const [search,setSearch]=useState('')
  const {onAdd}=props
  const [navbarOpen, setNavbarOpen] = useState(false)

//Below is for the FILTER MENU//
const closeMenu = () => {
  setNavbarOpen(false)
}
const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
  
}




  useEffect(()=>{
    const fetchHotel=async()=>{
      const hotels = await getAllHotels(location_id);
      setHotel(hotels.map(val=>val).sort((a,b)=>b.price-a.price));
    
      
    };
    fetchHotel();
  }, [])

// search filter hotel//
const filterHotels = hotel.filter((val) => {  
  return  val.name.toLowerCase().includes(search.toLowerCase()) 

})
  const sortPriceLow = hotel.map(val=>val).sort((a, b) => a.price - b.price)
  const sortPriceHigh = hotel.map(val=>val).sort((a, b) => b.price - a.price)
  
  function handleSelectChange(e) {
    e.preventDefault();
    if (e.target.value == "LowPrice") setHotel(sortPriceLow);
    if (e.target.value == "HighPrice") setHotel(sortPriceHigh);
  }
  
  if ( filterHotels.length <= 0) {
    return <h1>Nothing found, search again:
     <div>
     <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
        <input value={search} type="search" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
        </div>
    </h1> 
  }

  return (
    <div>
      <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
Loading  </div>
</div>
<Carousel pause={null} cycle={true} >
        <Carousel.Item  >
          <img className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://www.thedatingdivas.com/wp-content/uploads/2020/06/The-Kiss-Walter-Wilson.jpg"/>
    <Carousel.Caption>
            <h1 style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'1000px' }}>Paradise Resorts</h1>
            <p style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'1000px' }} >Presenting Exlusive rooms for our loyal guests</p>
            <p style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'1000px' }} >Discover the details below!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img  className="IMG" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
  
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://chathaminn.com/wp-content/uploads/2018/06/honeymoon-couple-slide.jpg"/>
    <Carousel.Caption>
            <h1 style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'500' }}>Paradise Resorts</h1>
            <p style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'500' }} >Presenting Exlusive rooms for our loyal guests</p>
            <p style={{ color: 'white', textAlign: 'center', fontSize: '15px',fontWeight:'500' }} >Discover the details below!</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>






      <h1 style={{textAlign:'center'}}> INFINITE PARADISE,FOR ADULTS</h1>
      <div  className="thehotelparagraph" >
        <p>Welcome to Paradise Resorts, where warm Balkan/Carribean hospitality meets modern luxury and the unparalleled beauty of the Balkan/Carribean Seas. Located on a private peninsula surrounded by stunning turquoise waters and mangrove lagoons, this Victorian-style paradise sets a new standard for All Inclusive resorts in Balkan/Carribean Waters.</p>
<p>Located just 30 minutes from the international airport, Paradise Resorts are among the Carribeans/Balkans finest All Inclusive resorts. An adults only haven offering world-class accommodations, gourmet dining, and gorgeous surroundings, Paradise Resorts is an escape where the best of romance and hospitality seamlessly combine.</p>
      </div>
      <hr></hr>
      <header>
        <button style={{backgroundColor:'white',marginBottom:'10px'}}onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose  className="close" style={{ color: "black", width: "30px", height: "30px" }} />
          ) : (
              
      <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px', marginRight: '20px' }} icon="search" />
      )}
       
</button>      
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >
        <MdClose className="close" onClick={closeMenu} style={{ marginTop: '80px', fontSize: '30px', cursor: 'pointer' }} />
<div></div>
          <h1 style={{marginTop:'20px'}}>Find your dream resort below </h1>
  <FontAwesomeIcon style={{ color: 'black', marginTop: '40px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
      <input value={search} type="search" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
      <p  style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} >Sort:
      <select style={{ "border-radius": "10px" }} onChange={handleSelectChange}>

          <option value="HighPrice">Price: High</option>
          <option value="LowPrice">Price: Low </option>
        </select>
        </p>
        </ul>





</header>







      {filterHotels.map((val) => (
        
        <div>
          <Link to={`/locations/${location_id}/hotels/${val.id}/Reviews`}>
            <button>
            <FontAwesomeIcon style={{marginRight:'3px'}} icon="star"/>
              Reviews
              </button></Link>
          <Hotels val={val}
            onAdd={onAdd}
          />
          <div style={{display:'block',justifyContent:'space-around'}}>
          <button  className="BTN2" > <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/excursions`}>
          <FontAwesomeIcon  style={{marginRight:'8px'}} icon="info-circle"/>

            Excursions
            </Link> </button>
          <button className="BTN2" > <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/Suites`}>
          <FontAwesomeIcon style={{marginRight:'8px'}} icon="hotel"/>

            VIP Suites
            </Link> </button>
          
            <button className="BTN2" > <Link style={{textAlign: 'center'}} to={`/locations/${location_id}/hotels/${val.id}/entertainment`}>
            <FontAwesomeIcon  icon="ticket-alt"/>

            Entertainment
            </Link> </button>
          
            <button className="BTN2" > <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/Spa`}>
            <FontAwesomeIcon style={{marginRight:'10px'}} icon="spa"/>

            Luxury Spa
            </Link> </button>
</div>
          <hr></hr>
          </div>
      ))}
     
    </div>
  )
}

export default Hotel
