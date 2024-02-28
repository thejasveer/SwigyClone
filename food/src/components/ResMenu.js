 
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer";
import ResCategory from "./ResCategory";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { useState } from "react";


const ResMenu = ()=>{

    let {id}= useParams();
    const resInfo = useRestuarantMenu(id)
    
    const [showIndex,setShowIndex] = useState(0);
 
 if(resInfo===null)
 {
    return <Shimmer/>

 }
 
    const { name,cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> c.card?.card?.['@type']=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
     
   
return (
      <div className="text-center ">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-xl my-5">
      ( {`${cuisines.join(', ')} - ${costForTwoMessage}`} )
      </p>

      {categories.map((category,i)=>(
      <ResCategory category={category} 
      setShowIndex={()=> {
         showIndex==i ? setShowIndex(null):setShowIndex(i)
      }
      } showItems={i==showIndex?true:false}  key={category?.card?.card?.title}  />
      ))}
         
      </div>




    
);


}
export default ResMenu;