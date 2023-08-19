import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/usOnlineStatus";



 const Header = ()=>{
    let [btnName,setBtnName] =useState("Login");
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
      setBtnName("Login")
     }

    return (
      <div className='header'>
          <div className='logo_conatiner'>
          <Link to="/">  <img className="logo"  src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"/></Link>
          </div>
          
        
          <div className='nav_items'>
              <ul >
              <li>Online Status: {onlineStatus?   "🟢": "🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li ><Link to="/contact">Contact US</Link></li>
              <li>Cart</li>
              {/* {loggedIn?<li>{loggedInUser}</li>:""} */}
              {/* <li><button className="auth" onClick={loginNewUser}>{btnName}</button>
                </li> */}
               <li><button className="auth" onClick={()=>{
                (loggedIn)
                ?logoutUser()
                :loginNewUser()}
                }>{loggedIn?(loggedInUser+","):""}{btnName}</button>
                </li>
                
              
              </ul>
          </div>
          </div>
    )
  }
  export default Header;