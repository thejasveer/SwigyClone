import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer";
import { GetObjData } from "./../utils/helper";
const ResMenu = ()=>{

    const [resInfo,setResinfo] = useState(null)

useEffect(()=>{
    fetchRes();
},[]);
let {id}= useParams();
const fetchRes = async ()=>{
 
   
    let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`);
    json = await data?.json();
    
    setResinfo(json.data);
   
     
} 
 if(resInfo===null)
 {
    return <Shimmer/>
 }
    const { name,cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

    console.log(itemCards);
   

return (
<div>
<h1>{name}</h1>
<p>( {`${cuisines.join(', ')} - ${costForTwoMessage}`} )</p>
       <ul>
       { itemCards.map((item, i) =>(
            <li key= {item.card.info.id}>{item.card.info.name} - ${item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>
         
        )
        )}
       </ul>
     
</div>




    
);


}
export default ResMenu;