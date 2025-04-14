import ResturantCard from "./ResturantCard";
import { useState,useEffect} from "react";
// import Shimmer from "./Shimmer.js";
import resList from "../utilis/MockData.js";






const Body = () => { 
  // Local state variable - Super powerful variable
  const [resListResturant, setResListResturant] = useState(resList);
  const [filteredResturant,setfilteredResturant]=useState(resList);
  const[searchText,setsearchText]=useState("");

  //  useEffect(()=>{
  //   fetchData();
  //  },[]);

  //  const fetchData = async () => {
    
  //     const data = await fetch(
  //       "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.8408767&lng=91.42141960000001&carousel=true&third_party_vendor=1"
  //     );
  
  //     const json = await data.json();
  //     console.log(json);
  //     setResListResturant(json?.data?.cards[2]?.data?.data?.cards);
  // };
  // if(resListResturant.length===0){
  //   return <Shimmer/>;
  // }
  

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
             setsearchText(e.target.value);
          }}/>
          <button 
          onClick={()=>{
            console.log(searchText);
            const filteredResturant=resListResturant.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())

          );
          setfilteredResturant(filteredResturant);
          }}>
            Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => { // ✅ Fixed `onClick` typo
            const filteredList = resList.filter( // ✅ Use `resList` to always filter from the original list
              (res) => res.data.avgRating > 4
            );
            setResListResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> 
      <div className="res-container">
        {resListResturant.length > 0 ? ( 
          filteredResturant.map((restaurant) => ( 
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          ))
        ) : (
          <h3>No Top Rated Restaurants Found</h3>
        )}
      </div>    
    </div>
  ); 
};

export default Body;
