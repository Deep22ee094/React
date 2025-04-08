import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./compo/Header.js";
import Body from "./compo/Body.js";


const AppLayout=()=>{
   return ( <div className="app">
    <Header/>
    <Body/>  
   </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); // rendering of react component
