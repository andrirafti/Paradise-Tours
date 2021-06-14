import React from 'react'
import Hotels from '../components/Hotels'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllHotels } from '../services/hotels'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"



const Hotel = (props) => {
  const [hotel, setHotel] = useState([])
  const { location_id } = useParams()
  const [search,setSearch]=useState('')
  const {onAdd}=props
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
    return <h1>No Resorts Found,Search Again:
     <div>
     <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
        <input value={search} type="text" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
        </div>
    </h1> 
  }
  return (
    <div>
  <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
      <input value={search} type="text" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
      <p  style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} >Sort:
      <select style={{ "border-radius": "10px" }} onChange={handleSelectChange}>

          <option value="HighPrice">Price: High</option>
          <option value="LowPrice">Price: Low </option>
        </select>
        </p>
      {filterHotels.map((val) => (
        
        <div>
          <Hotels val={val}
            onAdd={onAdd}
          />
          <Link to={`/locations/${location_id}/hotels/${val.id}/Reviews`}>
            <button>
            <FontAwesomeIcon style={{marginRight:'3px'}} icon="star"/>
              Reviews
              </button></Link>
          <button style={{ borderRadius: '10px', background: 'white', width: '160px', height: '160px', margin: '10px' }}> <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/excursions`}>
          <FontAwesomeIcon  style={{marginRight:'8px'}} icon="info-circle"/>

            Excursions
            </Link> </button>
          <button style={{ margin: '10px', borderRadius: '10px', background: 'white', width: '160px', height: '160px' }}> <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/Suites`}>
          <FontAwesomeIcon style={{marginRight:'8px'}} icon="hotel"/>

            Suites
            </Link> </button>
          
            <button style={{ margin: '10px', borderRadius: '10px', background: 'white', width: '160px', height: '160px' }}> <Link style={{textAlign: 'center'}} to={`/locations/${location_id}/hotels/${val.id}/NightLife`}>
            <FontAwesomeIcon  icon="ticket-alt"/>

            Entertainment
            </Link> </button>
          
            <button style={{ margin: '10px', borderRadius: '10px', background: 'white', width: '160px', height: '160px' }}> <Link style={{ textAlign: 'center' }} to={`/locations/${location_id}/hotels/${val.id}/Spa`}>
            <FontAwesomeIcon style={{marginRight:'10px'}} icon="spa"/>

            Spa
            </Link> </button>

          <hr></hr>
          </div>
      ))}
     
    </div>
  )
}

export default Hotel
