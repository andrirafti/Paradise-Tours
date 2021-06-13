import React from 'react'
const Reviews = ({ val }) => {
  
  
  return (
    <div style={{ textAlign: 'center' }}>
      
      <img style={{marginTop:'100px',width:'50%'}} src={val.imgurl}/>
      <p>Rating:{val.reviewrating}/5</p>
      <p>Name:{val.name}</p>
      <p>Comment:{val.review}</p>
      {/* <button className="reviewBTN"onClick={() => onAdd(val)}>Book Excursion</button> */}


<hr></hr>

      
    </div>
  )
}

export default Reviews