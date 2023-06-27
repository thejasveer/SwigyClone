import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";


const Body = ()=>{

    const [resList,setResList] = useState([]);
    const [filteredRes,setFilteredResList]=useState([])
    const [searchInput,setSearchInput] = useState("");
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData = async ()=>{
        const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const {data} = await data1.json();

        const resListData = await data?.cards[2]?.data?.data?.cards;
        setResList(resListData)
        setFilteredResList(resListData)
         
    }
    
    


    return (resList.length===0)? <Shimmer/> : (
  <div className='body'>
      <div className='filter'>
        <div className='search'>
            <input placeholder="Search" type='text' className="search" value={searchInput} onChange={(e)=>{
                setSearchInput(e.target.value)
                filteredList = resList.filter((res)=>{
                    return  res.data.name.toLowerCase().includes(searchInput.toLowerCase());
                    
                  });
                  setFilteredResList(filteredList)
                
                }}/>
            
        </div>
         <button className="filter-btn" onClick={()=>{
            filteredList = resList.filter((res => res.data.avgRating>4.3))
            setFilteredResList(filteredList)
           }}>Top Rated Restraunts</button>
      </div>
      <div className='res_container'>
  
      {
          // resList.map(res=> <ResCard resData={res}/>)
          filteredRes.map((res)=>(
            <Link to="/res/{res.data.id}"  key={res.data.id}> <ResCard
             
              resData={res}/>
              </Link> 
          ))
      }
      
       
      </div>
  </div>
    ) 
  }
  export const a="Ss";
  export default Body;