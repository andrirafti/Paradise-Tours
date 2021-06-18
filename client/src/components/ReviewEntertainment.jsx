import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
const ReviewEntertainment = ({ val }) => {

  
  
  return (
    <div className="entertainComments" >
      
      <p className="NameE" >
        <FontAwesomeIcon icon="user" />
        
        {val.name.substring(0,6) }
      </p>
      <div>
        <p className="RatingE" >Rating:{val.rating}/5</p>
       </div>
        <p className="CommentE" >Comment:{val.review}</p>
        


<hr></hr>

      
    </div>
  )
}

export default ReviewEntertainment