import ResCard, {WithOpenLabel} from "./ResCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import axios from "axios";
import useOnlineStatus from "../utils/usOnlineStatus";
const Body = ()=>{



    const [resList,setResList] = useState([]);
    const [filteredRes,setFilteredResList]=useState([])
    const [searchInput,setSearchInput] = useState("");
    const [sortActive, setSortActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState("relevence");
    const OpenRes = WithOpenLabel(ResCard);
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData =  ()=>{
        const data1 =  axios.get("https://portfolio.wdd12-jasveer.xyz/api/get-res").
        then((res) =>  {
           
          let data = res?.data?.data;
 
          const resListData = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setResList(resListData)
          setFilteredResList(resListData)
        });
         
    }

    const handleSort= (val)=>{
      let sortedData;
        switch (val) {
          case "relevance":
            setFilteredResList(resList)
            break;
          case "deliveryTime":
                
           sortedData =   resList.sort((a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);
            break;
          case "costForTwo":
            sortedData =   resList.sort((a, b) => a?.info?.costForTwo - b?.info?.costForTwo);
              break;
          case "rating":
            sortedData = resList.sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);
                break;
           
            // Code to be executed if expression doesn't match any case
        }
 
      setFilteredResList(sortedData)
      setSelectedSort(val)
      
    }
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
      return <h1>Looks like you are offline</h1>
    }
   
    return (resList.length===0)? <Shimmer/> : (
  <div className='body'>
      <div className='filter'>
        <div className='flex justify-between pl-20 pr-20'>
            <input className="border rounded-lg border-black p-2  " placeholder="Search" type='text'  value={searchInput} onChange=   {(e)=>{

                setSearchInput(e.target.value)
                
                filteredList =(e.target.value.length>0)? resList.filter((res)=> res?.info?.name.toLowerCase().includes(searchInput.toLowerCase())):resList;
                
                  setFilteredResList(filteredList)
                
                }}/>
                <div className="relative">
                <button type="button" className="cursor-pointer flex gap-2 text-green-500  p-2 border-1 border border-gray-200 rounded-lg" 
                onClick={()=>{
                   setSortActive(!sortActive)
                  }}>SORT <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                </button>
                {sortActive &&

                <form  className="absolute bg-white top-full rounded-md right-0 border py-2 px-6 space-y-2 shadow-lg z-10">
                  <div className="flex items-center justify-between w-32"  onChange={(e)=>handleSort('relevence')} ><label htmlFor="relevence" ><span>Relevance</span></label><input type="radio" name="sortBy" id="relevance" className="cursor-pointer      w-3 h-3 rounded-full  "    value={selectedSort}  checked={selectedSort=='relevence' }/></div>
                  <div className="flex items-center justify-between w-32"  onChange={(e)=>handleSort('deliveryTime')} ><label  htmlFor="delivertTime" ><span className="whitespace-nowrap">Delivery Time</span></label><input type="radio" name="sortBy" id="deliveryTime" className="cursor-pointer   w-3 h-3 rounded-full "   value={selectedSort}  checked={selectedSort=='deliveryTime' }/></div>
                  <div className="flex items-center justify-between w-32"  onChange={(e)=>handleSort('rating')} ><label  htmlFor="rating" ><span>Rating</span></label><input type="radio" name="sortBy" id="rating" className="cursor-pointer   w-3 h-3 rounded-full  "  value={selectedSort}    checked={selectedSort=='rating' }  /></div>
                  <div className="flex items-center justify-between w-32"  onChange={(e)=>handleSort('costForTwo')} ><label htmlFor="costForTwo"  ><span>Cost For Two</span></label><input type="radio" name="sortBy" id="costForTwo" className="cursor-pointer    w-3 h-3 rounded-full  "  value={selectedSort}    checked={selectedSort=='costForTwo'}/></div>
                </form>
                }
                </div>
                   
        </div>

      </div>
      <div className='flex flex-wrap  justify-center  mb-16'>
  
      {
          // resList.map(res=> <ResCard resData={res}/>)
          filteredRes.map((res)=>(
            <div key={res?.info.id} > 
          
              {res.info.avgRating>4 ? <OpenRes resData={res?.info}/>:<ResCard resData={res?.info}/>}
              
              </div> 
          ))
      }
      
       
      </div>
  </div>
    ) 
  }

  export default Body;