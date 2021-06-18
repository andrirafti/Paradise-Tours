import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
const Reviews = ({ val }) => {
  
  
  return (
    <div style={{ textAlign: 'left',height:'100%' }}>
      
      <p>
      <FontAwesomeIcon icon="user"/>
        {val.name}
      </p>
        <p>Rating:{val.rating}/5</p>
        <p>Comment:{val.review}</p>
        


<hr></hr>

      
    </div>
  )
}

export default Reviews