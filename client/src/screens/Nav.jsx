import React, { useState,useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Nav.css"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"


const Nav = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  
  const { countCartItems, } = props;

  //Below is for the HAMBURGER MENU//
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
    
  }

  
  return (
  
    <nav style={{ width: '100%', position: 'fixed', background: '#8C92AC' }} className="navBar">
      <h1 style={{ textAlign: 'center',marginLeft:'20px' }}>
      <FontAwesomeIcon style={{marginRight:'5px'}} icon="sun"/>
        The Paradise Collection
        </h1>
        
     
      <hr></hr>
      <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose  className="close" style={{ color: "black", width: "30px", height: "30px" }} />
    ) : (
      <FiMenu className="open"  />
      )}
       
</button>      
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} ><Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '70px', marginLeft: '20px' }} to="/">
        <FontAwesomeIcon style={{marginRight:'5px'}} icon="home"/>
        Home
        </Link>
        <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '20px', marginLeft: '20px',marginTop: '30px', paddingRight: '0px' }} to="/locations">
          <FontAwesomeIcon style={{marginRight:'5px'}} icon="globe-europe" />
          Paradise Destinations
           </Link>
        {/* <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '20px', marginLeft: '30px', paddingRight: '0px' }} to="/locations"> VIP Locations *ON SALE*</Link> */}


        




        <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '30px', marginLeft: '20px', paddingRight: '0px' }} to='/MyCartLoggedIn'>
          <FontAwesomeIcon style={{marginRight:'5px'}}icon="shopping-cart"/>
          Cart{countCartItems ? (
            <button style={{fontSize:'10px',backgroundColor:'red',width:'30px',height:'25px',marginTop:'10px'}} className="badge"><FontAwesomeIcon icon="shopping-cart"/>{countCartItems}</button>
            ): " "} </Link>

        
          


     
       
      </ul>
   
      </nav>
   
      
      
    
  )
}

export default Nav
