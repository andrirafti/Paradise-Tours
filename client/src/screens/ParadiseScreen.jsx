import { useState, useEffect } from 'react'
import Paradise from '../components/Paradise'
import { Link } from 'react-router-dom';
import { getAllLocations } from '../services/locations'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"

const ParadiseScreen = (props) => {
  const {onAdd}=props
  const [location, setLocation] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    const fetchLocations=async()=>{
      const locations = await getAllLocations();
      setLocation(locations);
    
      
    };
    fetchLocations();
  }, [])
  // search filter location//
const filterLocations = location.filter((val) => {  
  return  val.name.toLowerCase().includes(search.toLowerCase()) 

})
  
if ( filterLocations.length <= 0) {
  return <h1>No Countries Found,Search Again:
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
      {filterLocations.map((val) => (
        <div>  
          <Paradise
              val={val}
              onAdd={onAdd}
          />
        
          
        </div>
          
      ))}
      
    </div>
  )
}

export default ParadiseScreen
