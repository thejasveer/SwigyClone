
import { useEffect, useState } from "react";

const useRestuarants= (id) =>{
    const [resList,setResList] = useState([]);
    useEffect(()=>{
     
        fetchRes()
           
    },[])

    const fetchRes =  ()=>{

   
            const data1 =  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING", {
                method: 'GET',
                mode: 'no-cors'
              })
            .then((response) => response.json() ).then(({data})=>{
        
                const resListData = await data?.cards[2]?.data?.data?.cards;
                setResList(resListData)
            
                });
            
            // const {data} = await data1.json();
    
            
             
          
        
    } 


    return resList;
}

export default useRestuarants;