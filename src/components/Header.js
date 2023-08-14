import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/usOnlineStatus";



 const Header = ()=>{
    let [btnName,setBtnName] =useState("login");
    const onlineStatus = useOnlineStatus();


    return (
      <div className='header'>
          <div className='logo_conatiner'>
              <img className="logo"  src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"/>
          </div>
          
        
          <div className='nav_items'>
              <ul >
              <li>Online Status: {onlineStatus?   "🟢": "🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li ><Link to="/contact">Contact US</Link></li>
              <li>Cart</li>
              
              <li><button className="auth" onClick={()=>{(btnName==='login')?setBtnName("logout"):setBtnName("login")}}>{btnName}</button></li>
              </ul>
          </div>
          </div>
    )
  }
  export default Header;