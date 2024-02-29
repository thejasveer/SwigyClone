import {CDN_URL} from '../utils/constants';
import { Link } from "react-router-dom";
const ResCard = (props)=>{ 
    const {resData}= props;
    let {name,cuisines,avgRating,sla,costForTwo}= resData;
    name = name.substring(0, 20);
    name = (name.length==20)?name.concat("..."):name;
    cuisines = cuisines.join(", ").substring(0, 20);
    cuisines = (cuisines.length==20)?cuisines.concat("..."):cuisines;
 return (
    <Link to={  `/res/${resData.id}`} >
     <div className='  mt-20 w-52 h-60 p-2 rounded-lg flex flex-col justify-between gap-1'>
        <img className='rounded-lg' src={CDN_URL+resData.cloudinaryImageId} />
        <h3 className='title text-xl text-black'>{name}</h3>
        <h4>{cuisines}</h4>
        <div className='flex justify-between mb-0'>
        <h4 className='bg-green-500 p-1 text-white rounded-md'>{avgRating} ⭐️ </h4>
        
        <h4>⏰ {sla.deliveryTime} mins</h4>
        </div>
        <h4 className='text-right'>{costForTwo}</h4>
    
        </div>
    </Link>
 
 );
};

// higher order component

//input 
export const WithOpenLabel  = (ResCard) =>{
   return (props)=>{
      const {resData}= props;
      return (
         <div style={{position:'relative'}}>
            <label style={{position:'absolute',background:'#000',color:'#fff',top:'0',padding:'5px',borderRadius:'5px'}}>Promoted</label>
            <ResCard resData={resData}/>
         </div>
      )

   }
}
export default ResCard;     