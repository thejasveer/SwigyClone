
import { useEffect, useState } from "react";

const useRestuarants= (id) =>{
    const [resList,setResList] = useState([]);
    useEffect(()=>{
     
        fetchRes()
           
    },[])

    const fetchRes = async ()=>{

   
            const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
            const {data} = await data1.json();
    
            const resListData = await data?.cards[2]?.data?.data?.cards;
            setResList(resListData)
             
          
        
    } 


    return resList;
}

export default useRestuarants;