 import {LOGO_URL} from "../utilis/constants.js";
 import {useState,useEffect} from "react";
 import {Link} from "react-router-dom";
 const Header=()=>{
 const [btnNameReact,setbtnNameReact]=useState("Login");

 // if no dependency array=> useEffect is called on every render
 // if the dependencies array is empty =[]=> useEffect is called on initial
 useEffect(()=>{
  console.log("useEffect called");
 },[]);

  return (
   <div className="header">
   <div className="logo-container">
   <img 
   className="logo"
   src={LOGO_URL} 
   />  
      </div>
      <div className="nav-items">
          <ul>
          <li>
          <Link to="/"> Home </Link>
          </li>
         <li>
          <Link to="/about"> About Us </Link>
          </li>
         <li>
          <Link to="/contact"> Contact Us </Link>
          </li>
         <li>Cart</li>
         <button className="login"
          onClick={()=>{
            btnNameReact==="Login"
            ?setbtnNameReact("Logout")
            :setbtnNameReact("Login");
          }}
          >
            {btnNameReact}</button>
         </ul>
          </div>    
   </div>   
  );
};
export default Header;