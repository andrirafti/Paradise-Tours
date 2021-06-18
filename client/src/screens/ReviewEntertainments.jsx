import React,{useState,useEffect} from 'react'
import { getAllEntertainmentReview } from "../services/reviewEntertainment"
import { Link, useParams } from 'react-router-dom';
import ReviewEntertainment from '../components/ReviewEntertainment';


const ReviewEntertainments = () => {
  const [review, setReviews] = useState([])
  const { location_id, hotel_id,entertainment_id } = useParams()
  useEffect(()=>{
    const fetchReviews=async()=>{
      const reviews = await getAllEntertainmentReview(location_id,hotel_id,entertainment_id);
      setReviews(reviews.map(val=>val).sort((a,b)=>b.rating-a.rating));
    };
    fetchReviews();
  }, [])
   
  
  //Average Rating//
  // let AVG = review.map((val) => val.reviewrating).reduce((a, b) => a + b) 
  
  let AVG = review.map(val => val.rating).reduce((a, b) => a + b,0)/review.length.toFixed(1)
  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Enjoyed your  stay at our exclusive room?</h1>
      <p style={{textAlign:'center'}}>Please leave a review!</p>
      <Link to={`/locations/${location_id}/hotels/${hotel_id}/entertainments/${entertainment_id}/MakeReview`} ><button style={{ width: '100%' }} > Leave A Review</button></Link>
      <h1 style={{textAlign:'center'}}>
        Average Rating:
           <button className="badge">{AVG}</button> /5
        </h1>
      
      <h1 style={{textAlign:'center'}}>Reviews</h1>
      {review.map((val) => (
    
         <ReviewEntertainment val={val}/>
        
      ))}
    </div>
  )
}

export default ReviewEntertainments
