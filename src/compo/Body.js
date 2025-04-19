import ResturantCard from "./ResturantCard.js";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer.js";
import resList from "../utilis/MockData.js";






const Body = () => { 
  // Local state variable - Super powerful variable
  const [resListResturant, setResListResturant] = useState([]);
  const [filteredResturant,setfilteredResturant]=useState([]);
  const[searchText,setsearchText]=useState("");

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING"
      );
  
      const json = await data.json();
      console.log("ha jjjjjjj ",json);

      const restaurantCards = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle.restaurants
      )?.card?.card?.gridElements?.infoWithStyle.restaurants;


      console.log("haji",restaurantCards);
      setResListResturant(restaurantCards || []);

  };
  if(resListResturant.length===0){
    return <Shimmer/>;
  }
  

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
             setsearchText(e.target.value);
          }}/>
          <button 
          onClick={()=>{
            console.log("seachtext",searchText);
            const filteredResturant=resListResturant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          console.log("filteredResturant1",filteredResturant)
          setfilteredResturant(filteredResturant);
          }}>
            Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => { // ✅ Fixed `onClick` typo
            const filteredList = resListResturant.filter( // ✅ Use `resList` to always filter from the original list
              (res) => res.info.avgRating >4.5
            );
            setResListResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> 
      <div className="res-container">
        {filteredResturant.length > 0 ? ( 
          filteredResturant.map((restaurant,index) => ( 
            <ResturantCard key={index} resData={restaurant.info} />
          ))
        ) : (
          resListResturant.map((restaurant,index) => ( 
            <ResturantCard key={index} resData={restaurant.info} />
          ))
        )}
      </div>    
    </div>
  ); 
};

export default Body;
