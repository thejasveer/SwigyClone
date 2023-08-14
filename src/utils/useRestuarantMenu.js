
import { useEffect, useState } from "react";

const useRestuarantMenu = (id) =>{
const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
     
        fetchRes()
           
    },[])

    const fetchRes = async ()=>{

        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`);
        json = await data?.json();
        
        setResInfo(json.data);
    
        
    } 


    return resInfo;
}

export default useRestuarantMenu;