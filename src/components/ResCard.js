import {CDN_URL} from '../utils/constants';
import { Link } from "react-router-dom";
const ResCard = (props)=>{ 
    const {resData}= props;
    const {name,cuisines,avgRating,costForTwo}= resData;
 return (
    <Link to={  `/res/${resData.id}`} >
           <div className='res_card bg-black'>
        <img src={CDN_URL+resData.cloudinaryImageId} />
        <h3 className='title text-xl text-black'>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ⭐️ </h4>
        <h4>{costForTwo}</h4>
        <p></p>
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