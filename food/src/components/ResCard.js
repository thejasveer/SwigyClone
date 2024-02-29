import {CDN_URL} from '../utils/constants';
import { Link } from "react-router-dom";
const ResCard = (props)=>{ 
    const {resData}= props;
    let {name,cuisines,avgRating,sla,costForTwo,locality,aggregatedDiscountInfoV3}= resData;
     
    name = name.substring(0, 20);
    name = (name.length==20)?name.concat("..."):name;
    cuisines = cuisines.join(", ").substring(0, 20);
    cuisines = (cuisines.length==20)?cuisines.concat("..."):cuisines;
 return (
    <Link to={  `/res/${resData.id}`} >
     <div className='  mb-20 w-80 h-80 p-2 rounded-lg flex flex-col justify-between gap-1 text-slate-600'>
      <div className='relative'>
         <img className='rounded-lg' src={CDN_URL+resData.cloudinaryImageId} />
    <div className='mx-2 p-2 rounded-md font-black font-2xl absolute bottom-2 text-white bg-black shadow-inner-2xl'>
            <span>{aggregatedDiscountInfoV3?.header}</span>
            <span>{aggregatedDiscountInfoV3?.subHeader}</span>

         </div>
 
      </div>
    

        <h3 className='title text-xl font-bold '>{name}</h3>
       
        
        <div className='flex justify-between mb-0'>
         <div className='flex items-center gap-1'>
            <div className='bg-green-600 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
            </svg>
            </div>
            
            <span className='font-semibold'> {avgRating} |   {sla.slaString} mins</span>

          
         </div>
       
        
          
        </div>
         <span className='font-thin'>{cuisines}</span>
        <span className='font-thin'>{locality}</span>
    
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
            <label style={{position:'absolute',background:'green',color:'#fff',top:'0',padding:'5px',borderRadius:'5px','z-index':'10'}}>Promoted</label>
            <ResCard resData={resData}/>
         </div>
      )

   }
}
export default ResCard;     