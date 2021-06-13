import React from 'react'
import Excursions from '../components/Excursions'

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllExcursions } from '../services/excursions'
const Excursion = (props) => {
  const [excursion, setExcursion] = useState([])
  const { location_id, hotel_id } = useParams()
  const {onAdd}=props
  useEffect(()=>{
    const fetchExcursion=async()=>{
      const excursions = await getAllExcursions(location_id,hotel_id);
      setExcursion(excursions);
    
      
    };
    fetchExcursion();
  }, [])
  return (
    <div>
      {excursion.map(val => ( 
        <Excursions
          val={val}
          onAdd={onAdd}
        />
        ))
      }
    </div>
  )
}

export default Excursion
