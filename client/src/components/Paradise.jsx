import React from 'react';
import "./Paradise.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import { Link } from "react-router-dom";


export default function Paradise(props) {
  const { val, onAdd } = props;
  
  
  let randomnum = Math.random() * 300
  let WholeNum = randomnum.toFixed(0)
  let Planes = ["Boeing 747", "Boeing 777", "Boeing 777"]
  let Plane = Math.floor(Math.random() * Planes.length)
  let ChosenPlanes = Planes[Plane]
  let Locations = ["Singapore", 'Australia', "France", "Africa", "Japan"]
  let RandomLocation = Math.floor(Math.random() * Locations.length)
  let RandomArrival = Locations[RandomLocation]

  //Bottom is so we can say if plane is nearby OR NOT//!
  if (WholeNum < 100) {
    return (
      <div style={{marginTop:'100px'}}>
      <h2 >
      <FontAwesomeIcon icon="plane-departure"/>
        Embarkation Port: EWR
         </h2>
      <p>
     
      <FontAwesomeIcon icon="clock" />
        <meter value={WholeNum} min="0" max="300" />
      ETA: {WholeNum} Mintues: Plane Is Landing Soon!
          </p>
      <p>
      <FontAwesomeIcon icon="fighter-jet"/>
Plane: {ChosenPlanes}</p>
      <p>
      <FontAwesomeIcon icon="plane-arrival"/>
        Arriving From: {RandomArrival}
      </p>
    
    <div className="styleit" style={{textAlign:'center'}} >
    <Link   to={`/locations/${val.id}/hotels`}>
        <img className="IMG"  src={val.imgurl} />
  </Link>
          <h3>
            <FontAwesomeIcon icon="map-pin" />
{val.name}</h3>
        <p>
        <FontAwesomeIcon icon="dollar-sign"/>
            {val.price}
            <div>
          <label>Dates: 
              <input min="2021-06-17" type="date" />
            </label>
            </div>
            <Link   to={`/locations/${val.id}/hotels`}>
              <button className="reviewBTN" onClick={() => onAdd(val)}>
              <FontAwesomeIcon style={{marginRight:'5px'}}icon="shopping-cart"/>

              Fly 
                </button>
     </Link>
        </p>
      <p > Distance:{val.distance} Miles</p>
        </div>
        <hr></hr>
        </div>
      
    )
  }

  //plane meter ends here//


  return (
  
    <div style={{ marginTop: '100px' }}>
      <h2 >
      <FontAwesomeIcon icon="plane-departure"/>
        Embarkation Port: EWR
         </h2>
         {/* <button style={{height:'35px',borderRadius:'10px',color:'white',backgroundColor:'blue'}}>
        <FontAwesomeIcon icon="directions"/>
          Directions</button> */}
      <p>
        <FontAwesomeIcon icon="clock" />
        
          <meter value={WholeNum} min="0" max="300" />
        
        ETA: {WholeNum} Mins Remaining
        </p>
      <p>
      <FontAwesomeIcon icon="fighter-jet"/>
Plane: {ChosenPlanes}</p>
      <p>
      <FontAwesomeIcon icon="plane-arrival"/>
        Arriving From: {RandomArrival}
      </p>
    <div className="styleit" style={{textAlign:'center'}} >
     
    <Link   to={`/locations/${val.id}/hotels`}>

        <img className="IMG"  src={val.imgurl} />
      </Link>
        <h3>      <FontAwesomeIcon icon="map-pin"/>
{val.name}</h3>
        <p>
        <FontAwesomeIcon icon="dollar-sign"/>

          {val.price}
          <div>
          <label>Fly Date: 
              <input  min="2021-06-17" type="date" />
            </label>
            </div>
          <Link  style={{ color: 'black' }} to={`/locations/${val.id}/hotels`}>
            <button className="reviewBTN" onClick={() => onAdd(val)}>

              <FontAwesomeIcon style={{ marginRight: '5px' }} icon="shopping-cart" />         
              Book </button>
          
          </Link>
        </p>
      <p > Distance:{val.distance} Miles</p>
        
      </div>
      <hr></hr>
      

      </div>
    )
      
     
   
  
}
