import React from 'react'

const Excursions = ({val,onAdd}) => {
  return (
    <div style={{textAlign:'center'}}>
      <img style={{marginTop:'100px',width:'50%'}} src={val.imgurl}/>
      <p> Excursion:{val.name}</p>
      <p>${val.price}</p>
      <button className="reviewBTN"onClick={() => onAdd(val)}>Book Excursion</button>

      <p>{val.description}</p>

<hr></hr>

      
    </div>
  )
}

export default Excursions
