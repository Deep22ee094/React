import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./compo/Body.js";
import About from "./compo/About.js";
import Contact from "./compo/Contact.js";
import Error from "./compo/Error.js";
import Header from "./compo/Header.js"; 
import ResturantMenu from "./compo/ResturantMenu.js";
import LoginPage from "./compo/Login.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


const AppLayout=()=>{
   return (
       <div className="app">
    <Header/>
    <Outlet/>
   </div>
   );
};
const appRouter=createBrowserRouter([
   {
      path:"/",
      element: <AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/about",
            element:<About/>,
         },
         {
            path:"/contact",
            element:<Contact/>,
         },
      ],
      errorElement:<Error/>,
   },
   {
   path:"/about",
   element:<About/>,
},
{
   path:"/contact",
   element:<Contact/>,
},
{
   path:"/resturants/:resId",
   element:<ResturantMenu/>,
},
{
   path:"/login",
   element:<LoginPage/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 
