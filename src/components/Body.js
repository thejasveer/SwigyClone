import ResCard, {WithOpenLabel} from "./ResCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/usOnlineStatus";
const Body = ()=>{



    const [resList,setResList] = useState([]);
    const [filteredRes,setFilteredResList]=useState([])
    const [searchInput,setSearchInput] = useState("");
    const OpenRes = WithOpenLabel(ResCard);
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData = async ()=>{
        const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING").
        then((response) =>  response.json() ).then(({data})=>{
          const resListData = data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setResList(resListData)
          setFilteredResList(resListData)
        });
         
    }
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
      return <h1>Looks like you are offline</h1>
    }
   
    return (resList.length===0)? <Shimmer/> : (
  <div className='body'>
      <div className='filter'>
        <div className='search'>
            <input className="border bg-gray-800 p-5 " placeholder="Search" type='text' className="search" value={searchInput} onChange={(e)=>{

                setSearchInput(e.target.value)
                
                filteredList =(e.target.value.length>0)? resList.filter((res)=> res?.info?.name.toLowerCase().includes(searchInput.toLowerCase())):resList;
                
                  setFilteredResList(filteredList)
                
                }}/>
            
        </div>
         <button className="filter-btn" onClick={()=>{
            filteredList = resList.filter((res => res?.info?.avgRating>4.3))
            setFilteredResList(filteredList)
           }}>Top Rated Restraunts</button>
      </div>
      <div className='res_container'>
  
      {
          // resList.map(res=> <ResCard resData={res}/>)
          filteredRes.map((res)=>(
            <div key={res?.info.id}> 
          
              {res.info.avgRating>4 ? <OpenRes resData={res?.info}/>:<ResCard resData={res?.info}/>}
              
              </div> 
          ))
      }
      
       
      </div>
  </div>
    ) 
  }

  export default Body;