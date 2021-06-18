import React from 'react'

const Suite = ({val,onAdd}) => {
  return (
    <div style={{textAlign:'center'}}>
      <img style={{marginTop:'100px',width:'50%'}} src={val.imgurl}/>
      <p>{val.name}</p>
      <p>{val.description}</p>
      <p>From ${val.price}/night</p>
      <button className="reviewBTN"onClick={() => onAdd(val)}>Book Room</button>


<hr></hr>

      
    </div>
  )
}

export default Suite