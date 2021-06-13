import React from 'react'
import "./Hotels.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"


const Hotels = ({val,onAdd}) => {
  
  return (
    <div style={{ textAlign: 'center' }} >
        
    <img style={{marginTop:'100px',width:'50%'}}src={val.imgurl}/> 
  






      <h3>{val.name}</h3>
      <h2> Price/Day:${val.price}</h2>
      <button className="reviewBTN" onClick={() => onAdd(val)}>
      <FontAwesomeIcon icon="hotel"/>
        Book
        </button>

     
     
    </div>
  )
}

export default Hotels
