import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/usOnlineStatus";



 const Header = ()=>{
    let [btnName,setBtnName] =useState("Signin");
    let [loggedIn,setLoggedIn] =useState(false);
     const onlineStatus = useOnlineStatus();
    const {loggedInUser,setUserName} = useContext(UserContext);
  
    const loginNewUser = ()=>{
     let username = prompt("Enter your username","")
     setUserName(username);
     setLoggedIn(true)
     setBtnName("Logout")
    }
    const logoutUser = ()=>{
      
      setUserName("");
      setLoggedIn(false)
      setBtnName("Signin")
    }

     const cart  = useSelector((store)=> store.cart.items)

    return (
      <div className='header'>
          <div className='logo_conatiner'>
          <Link to="/">  <img className="logo"  src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"/></Link>
          </div>
          
        
          <div className='nav_items text-lg text-slate-600 gap-2'>
              <ul >
              <li>Online Status: {onlineStatus?   "🟢": "🔴"}</li>
              
              <li > <Link to="/cart" className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z" clipRule="evenodd" />
</svg>

                 ({cart.length})</Link></li>
             
               <li><button className="auth flex" onClick={()=>{
                (loggedIn)
                ?logoutUser()
                :loginNewUser()}
                }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              {loggedIn?(loggedInUser+","):""}{btnName}</button>
                </li>
                
              
              </ul>
          </div>
          </div>
    )
  }
  export default Header;