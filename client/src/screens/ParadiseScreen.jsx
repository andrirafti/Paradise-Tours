import { useState, useEffect } from 'react'
import Paradise from '../components/Paradise'
import { Link ,useHistory} from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { getAllLocations } from '../services/locations'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import "./Paradise.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel'
import Loading from "../screens/Loading"


const ParadiseScreen = (props) => {
  const { onAdd } = props
  const history=useHistory()
  const [location, setLocation] = useState([])
  const [search, setSearch] = useState("")
  const [navbarOpen, setNavbarOpen] = useState(false)

  



/// handle select for sorting
function handleSelectChange(e) {
  e.preventDefault();
  if (e.target.value == "LowPrice") setLocation(sortPriceLow);
  if (e.target.value == "HighPrice") setLocation(sortPriceHigh);
}

//Below is for the SEARCH  NAVBAR MENU//
const closeMenu = () => {
  setNavbarOpen(false)
}
const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
  
}
///
  
  
//Reseting Page//
  function Reset() {
   window.location.reload()
  }
  //
  

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
  //bottom is  for the loading screen//
  if(location.length<=0) {return  <Loading/> }
  //bottom is for the searching filter sort option!//
  if ( filterLocations <= 0) {
    return <h1>No results found..Search again:
   <div>
   <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
      <input value={search} type="search" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
      </div>
  </h1> 
}
//Sort By Price Low:High//
  let sortPriceLow=filterLocations.map(val=>val).sort((a,b)=>a.price-b.price)


//Sort By Price High:Low//
let sortPriceHigh=filterLocations.map(val=>val).sort((a,b)=>b.price-a.price)
//Total flights ongoing..
  let totalflight = location.length

  return (
    
    <div className="TheDiv">
     <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
Loading  </div>
</div>
<Carousel pause={null} cycle={true} >
        <Carousel.Item  >
          <img className="IMG"  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
   
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
    <Carousel.Caption>
            <h1 style={{color:'black',fontSize:'15px'}}>Paradise Resorts</h1>
            <p style={{color:'black',fontSize:'15px'}} > Exlusive Flight+Room Package Deals for our loyal guests</p>
            <p  style={{color:'black',fontSize:'15px'}}>Discover the details below!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img className="IMG"  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    opacity: '0.8',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            }} src="https://wallpaperaccess.com/full/406212.jpg"/>
    <Carousel.Caption>
            <h1 style={{color:'black',fontSize:'15px'}}>Paradise Resorts</h1>
            <p  style={{color:'black',fontSize:'15px'}}>Exlusive Flight+Room Package Deals for our loyal guests</p>
            <p  style={{color:'black',fontSize:'15px'}} >Discover the details below!</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>






      <h1 style={{ padding: '10px' }}>DESTINATION:</h1>
      <h2 style={{ padding:'10px'}} >FLY AWAY TO A GORGEOUS OASIS</h2>
      <div  className="wording" 
      >
      <p>Arrive into a world of possibilities, indulgence, and unmatched luxury in the spectacular destinations where Paradise Resorts has crafted its upscale properties for an extraordinary  beach resort getaway. The beaches of Albania, Mexico, and the Dominican Republic provide your tailored and unforgettable travel experience.
      </p>
      <p>
          Tropical sophistication meets soft sands and turquoise waters, welcoming you to unwind in a warm resort hideaway. Choose your favorite Paradise Resorts property and see for yourself why they rank among the best All Inclusive resorts in the 7 Seas! Discover our world of captivating adults only retreats and be swept up in the spirit of vacation.
      </p>
        </div>
      <p style={{ textAlign: 'center' }}>DISCOVER OUR DESTINATIONS BELOW</p>
      <p style={{ textAlign: 'center' }}>
      <FontAwesomeIcon icon="plane-departure"/>
        {totalflight} Flights enRoute to EWR Airport...
        </p>
     
      <hr></hr>
      <p>
        
        <button className="headerBTN" style={{ backgroundColor: 'white'}}onClick={handleToggle}>
          {navbarOpen ? (
           
    <MdClose  className="close" style={{color: "black", width: "30px", height: "30px" }} />
          ) : ( <p>Sort: <FontAwesomeIcon style={{ fontSize:'17px'}} icon="search" /></p>
          )
  }
       
</p>      
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >
          {/* <button  onClick={closeMenu} style={{ marginTop: '70px' }}>Close</button> */}
          <MdClose className="close" onClick={closeMenu} style={{ marginTop: '100px', fontSize: '30px', cursor: 'pointer' }} />
          
          <div></div>
          <h3 style={{marginTop:'10px'}}>What are you looking for?</h3>
      <FontAwesomeIcon style={{ color: 'black', marginTop: '20px', marginLeft: '20px', paddingRight: '0px',marginRight:'10px'}} icon="search" />
          <input style={{ marginBottom: '50px' }} value={search} type="search" placeholder="Search .." onChange={(e) => setSearch(e.target.value)} />
<p >Sort:
          <select style={{ "border-radius": "10px" }} onChange={handleSelectChange}>
<option value="LowPrice">Price- Low to High</option>
<option value="HighPrice">Price- High to Low </option>
            </select>
          </p>
          <Link onClick={Reset}>
            Reset
          </Link>
          
          
        </ul>
        





      </header>



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
