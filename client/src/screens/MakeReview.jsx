import {postReview} from "../services/reviewSuite"
import {useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import "../components/FontAwesome"


//Suite Review Maker//
const MakeReview=()=>{
  const [isCreated, setCreated] = useState(false);
  const {location_id,hotel_id,suite_id}=useParams();
  const history=useHistory();
  //the below is an easier way to do const [name,setName] const [goal,setGoal] make all useState into one big one
  const [reviews,setReview]=useState({
    name:"",
    rating: "",
    review: ""
  })
  //handleChange for the above// its the shorter way of doing const [name,setName]=useState([]) do all at once instead of indivually 
  
  const handleChange=(e)=>{
    //name,value as special values used in our form so that what we will target.
    const {name,value}=e.target;
    setReview({
      ...reviews,
      //we are making our client.. aka name,goal become name:value
      [name]:value
    })
  }
  
  // Now we need our handleSubmit which brings in the axios call to submit everyting properly from the handleChange input fields//
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const reviewadded = await postReview(location_id,hotel_id,suite_id,reviews);
      setCreated(reviewadded);
    };
    if (isCreated){
      history.push(`/locations/${location_id}/hotels/${hotel_id}/Suites`)
    }
  
  return (
   
    <div className="block ">
      <form onSubmit={handleSubmit}>
          
   
        <h1 style={{ "textAlign": "center" }}>Like our rooms?
          Leave us a review!</h1>
        <hr></hr>
        <div  className="reviews"style={{ "textAlign": "center" }}>
          <aside>
            {/* <label> Name: */}
        <input style={{ marginRight: '0', marginLeft: '30%', display: 'block',marginTop:'20px' }} type="text" placeholder="Name" name="name" value={reviews.name} required onChange={handleChange} />
            {/* </label> */}
          </aside>
          <aside style={{marginTop:'20px'}}>
            {/* <label> Comment: */}
        <input style={{ marginRight: '0', marginLeft: '30%', display: 'block' }} type="text" placeholder="Review" name="review" value={reviews.review} required onChange={handleChange} />
            {/* </label> */}
          </aside>
        </div>
        <div style={{marginTop:'20px',marginRight:'0',marginLeft:'40%',display:'block'}} className="reviews">

          {/* <p>The Below is For STAR RATINGS check the index CSS also!</p> */}
            <div className="rate">
<input  onChange={handleChange} type="radio" id="star5" name="rating" value="5" />
   <label for="star5" title="text">5 stars</label>
    <input onChange={handleChange} type="radio" id="star4" name="rating" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input onChange={handleChange} type="radio" id="star3" name="rating" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input onChange={handleChange} type="radio" id="star2" name="rating" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input onChange={handleChange} type="radio" id="star1" name="rating" value="1" />
    <label for="star1" title="text">1 star</label>

</div>





        </div>
          
        <button style={{
          "display": "block",
          "margin-left": "auto",
          "margin-right": "auto",
          "marginTop": "15px"
        }} type="submit">Submit Review</button>
      </form>

      




    </div>
  );
  

}
export default MakeReview