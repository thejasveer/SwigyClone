
import { useEffect, useState } from "react";
import axios from "axios";
const useRestuarantMenu = (id) =>{
const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
     
        fetchRes()
           
    },[])

    const fetchRes =  ()=>{

        let data =  axios.get("http://portfolio.wdd12-jasveer.xyz/api/get-res-detail/"+id).
        then((res) =>  {
          let data = res?.data?.data;
        setResInfo(data);
    
        });
        
    
        
    } 


    return resInfo;
}

export default useRestuarantMenu;