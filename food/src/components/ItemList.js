import ResCard from "./ResCard";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

import { addItem } from "../utils/cartSlice";
const ItemList = (props)=>{
    const dispatch = useDispatch();
    const {itemCards} = props;
    const add = (item)=>{
     
        dispatch(addItem(item))

    }
    return (
        <div>
     {itemCards.map((item)=>(
        <div key={item?.card?.info?.id} className="flex justify-between items-center text-left  p-2 m-2 mb-3 border-gray-300 border-b-2" >
        <div className="w-10/12">
            <span>{item?.card?.info?.name}</span>
            <span> - ${item?.card?.info?.price/100 ?? item?.card?.info?.defaultPrice/100}</span>
            <p className="text-xs text-gray-500">{item?.card?.info?.description}</p>
        </div>
        <div className="relative w-2/12 flex justify-center   ">
        <img className="ml-2   h-24 w-24  rounded-md" src={CDN_URL+ item?.card?.info?.imageId}/>
        <button type="button"
        onClick={(e)=>{
            e.stopPropagation();
            add(item?.card?.info);
        }}
        className="absolute bottom-0 bg-white shadow-md hover:shadow-lg hover:font-bold w-20 ml-2 
        text-green-500 border p-1 rounded-md border-green-400  ">Add +</button>
        </div>
        </div>
        ))}
    </div>
       
      

    )
}

export default ItemList;