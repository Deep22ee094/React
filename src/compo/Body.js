import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utilis/MockData.js";

const Body = () => { 
  // Local state variable - Super powerful variable
  const [resListResturant, setResListResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
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
          resListResturant.map((restaurant) => ( 
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
