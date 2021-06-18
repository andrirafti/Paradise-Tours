import React,{useState,useEffect} from 'react'
import { getAllReviews } from "../services/reviewSuite"
import { Link, useParams } from 'react-router-dom';
import ReviewSuites from "../components/ReviewSuites"

const ReviewsSuites = () => {
  const [review, setReviews] = useState([])
  const { location_id, hotel_id,suite_id } = useParams()
  useEffect(()=>{
    const fetchReviews=async()=>{
      const reviews = await getAllReviews(location_id,hotel_id,suite_id);
      setReviews(reviews.map(val=>val).sort((a,b)=>b.rating-a.rating));
    };
    fetchReviews();
  }, [])
   
  
  //Average Rating//
  // let AVG = review.map((val) => val.reviewrating).reduce((a, b) => a + b) 
  
  let AVG = review.map(val => val.rating).reduce((a, b) => a + b,0)/review.length.toFixed(1)
  console.log(AVG)

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Enjoyed your  stay at our exclusive room?</h1>
      <p style={{textAlign:'center'}}>Please leave a review!</p>
      <Link to={`/locations/${location_id}/hotels/${hotel_id}/suites/${suite_id}/MakeReview`} ><button style={{ width: '100%' }} > Leave A Review</button></Link>
      <h1 style={{textAlign:'center'}}>
        Average Rating:
           <button className="badge">{AVG}</button> /5
        </h1>
      
      <h1 style={{textAlign:'center'}}>Reviews</h1>
      {review.map((val) => (
    
         <ReviewSuites val={val}/>
        
      ))}
    </div>
  )
}

export default ReviewsSuites
