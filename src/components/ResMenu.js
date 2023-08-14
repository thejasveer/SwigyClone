 
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer";
 
import useRestuarantMenu from "../utils/useRestuarantMenu";


const ResMenu = ()=>{

    let {id}= useParams();
    const resInfo = useRestuarantMenu(id)
    

 if(resInfo===null)
 {
    return <Shimmer/>
 }
    const { name,cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

    console.log(resInfo);
   
 
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