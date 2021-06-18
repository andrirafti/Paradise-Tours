import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
const Reviews = ({ val }) => {
  
  
  return (
    <div style={{ textAlign: 'left',height:'100%' }}>
      
      {/* <img style={{marginTop:'100px',width:'50%'}} src={val.imgurl}/> */}
      
      <p>
      <FontAwesomeIcon icon="user"/>
        {val.name}
      </p>
        <p>Rating:{val.reviewrating}/5</p>
        <p>Comment:{val.review}</p>
        
      {/* <button className="reviewBTN"onClick={() => onAdd(val)}>Book Excursion</button> */}


<hr></hr>

      
    </div>
  )
}

export default Reviews