import {Route,Switch} from 'react-router-dom'
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./components/FontAwesome"
import Excursion from './screens/Excursion';
import Home from './screens/Home';
import Hotel from './screens/Hotel';
import Nav from './screens/Nav';
import ParadiseScreen from './screens/ParadiseScreen';
import Spa from './screens/Spa';
import Suites from './screens/Suites';
import {useState,useEffect} from 'react'
import Basket from './components/Basket'
import Review from './screens/Review';
import MakingReview from './screens/MakingReview';
import Entertainments from './screens/Entertainments';
import ReviewsSuites from './screens/ReviewsSuite';
import MakeReview from "./screens/MakeReview"
import ReviewEntertainments from './screens/ReviewEntertainments';
import MakeEntertainmentReview from "./screens/MakeEntertainmentReview"



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoaded(true);
    }, 2000)
  })
  
  //add for cart is below
  //when using the onAdd make sure my IDS for my apis are all different and not the SAME!! otherwise they wont add to cart properly (so cant have ID 1 and a excursion with ID 1 for that one otherwise it wont work)//
  const onAdd = (val) => {
    const exist = cartItems.find((x) => x.id == val.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id == val.id ? { ...exist, QTY: exist.QTY + 1 } : x));
    }
    else {
      setCartItems([...cartItems, { ...val, QTY: 1 }])
    }
  
  }
  //remove for cart
  const onRemove = (val) => {
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist.QTY === 1) {
      setCartItems(cartItems.filter((x) => x.id !== val.id));
    }
    else {
      setCartItems(cartItems.map((x) => x.id === val.id ? { ...exist, QTY: exist.QTY - 1 } : x))

    }
  }
  ////////LOCAL STORAGE STORING BELOW!! Do it the way below for carts///////
  
  
  //  //setting local storage//
  const saveItems = () => {
    localStorage.setItem("mycart", JSON.stringify(cartItems))
  };

  // local storage getting//

  const getItems = () => {
    if (localStorage.getItem("mycart") === null) {
      localStorage.setItem("mycart", JSON.stringify([]));
    }
    else {
      let getItem = JSON.parse(localStorage.getItem("mycart")
      );
      setCartItems(getItem);
    }
  };
  //  // BELOW MUST BE DONE THIS WAY AND IN App.js for this to work and save to local storage!
  useEffect(() => {
    getItems();
  }, [setCartItems])

  useEffect(() => {
    saveItems();
  })
  
  if (!isLoaded){
    return <h1  className="loader" style={{position:'fixed',top:'40%',left:'45%'}}>Loading.. Please Wait</h1>
  }
  
   //Above is local storage//

  return (

   isLoaded&&(
    <div >
          <Nav countCartItems={cartItems.length} />
          
          <div className="pagecontainer">
            <Route exact path="/MyCartLoggedIn"><Basket onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems} onRemove={onRemove} /></Route>
            <Route exact path="/locations/:location_id/hotels/:hotel_id/MakeReview"> <MakingReview /></Route>
            <Route exact path="/locations/:location_id/hotels/:hotel_id/Suites/:suite_id/MakeReview"> <MakeReview /></Route>
            <Route exact path="/locations/:location_id/hotels/:hotel_id/Entertainments/:entertainment_id/MakeReview"> <MakeEntertainmentReview />  </Route>

            <Route exact path='/locations/:location_id/hotels/:hotel_id/Reviews'><Review /></Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/Spa'><Spa /></Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/Suites/:suite_id/Reviews'> <ReviewsSuites /> </Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/Suites'><Suites onAdd={onAdd} /> </Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/entertainment/:entertainment_id/Reviews'> <ReviewEntertainments /> </Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/entertainment'><Entertainments onAdd={onAdd} /> </Route>
            <Route exact path='/locations/:location_id/hotels/:hotel_id/excursions'><Excursion onAdd={onAdd} /> </Route>
            <Route exact path='/locations/:location_id/hotels'> <Hotel onAdd={onAdd} /></Route>
            <Route exact path='/locations'> <ParadiseScreen onAdd={onAdd} /></Route>
            <Route exact path="/">  <Home  /></Route>
          </div>
          
        </div>
      
   )
    );
   
}

export default App;
