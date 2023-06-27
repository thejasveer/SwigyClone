import {CDN_URL} from '../utils/constants';
import { Link } from "react-router-dom";
const ResCard = (props)=>{ 
    const {resData}= props;
    const {name,cuisines,avgRating,costForTwo}= resData?.data;
 return (
    <Link to={  `/res/${resData.data.id}`} >
           <div className='res_card'>
        <img src={CDN_URL+resData.data.cloudinaryImageId} />
        <h3 className='title'>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ⭐️ </h4>
        <h4>${costForTwo/100} For Two</h4>
        <p></p>
    </div>
    </Link>
 
 );
};

export default ResCard;     