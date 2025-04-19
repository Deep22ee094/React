import {CDN_URL} from "../utilis/constants.js";
const ResturantCard=(props)=>{
    console.log("props",props)
    const {resData}=props;

    const {cloudinaryImageId ,name,avgRating,cuisine,costForTwo,deliveryTime}=resData


       return(
   <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img 
    className="res-logo"
    alt="res-logo"
    src={CDN_URL +cloudinaryImageId} 
    />  
   <h3>{name}</h3> 
   <h4>{cuisine} </h4>
   <h4>{avgRating} stars</h4>
   <h5> ${costForTwo/10000} For Two</h5>
   <h6>{deliveryTime} minutes</h6>   
   </div>
       );     
   };
   export default ResturantCard; 