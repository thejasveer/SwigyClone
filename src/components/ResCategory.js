
import ItemList from "./ItemList";
const ResCategory= (props)=>{
const {category,showItems,setShowIndex } = props;
const {title,itemCards} = category?.card.card;

const handleClick = ()=>{
    
    setShowIndex();
}
    return (
    <div className="text-black  flex justify-center  ">
        {/* header */}
        <div onClick={handleClick} className="cursor-pointer p-3 bg-gray-100 w-6/12  mb-2 shadow-xl rounded-md flex flex-col ">
            <div className="flex justify-between">
            <span className=" font-bold">{title} ({ itemCards.length})</span>
            {!showItems?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
           :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          
            
            }
            {/* body */}
            
    
        </div>
       { showItems && <ItemList itemCards={itemCards}  />}


       </div>
      
       
    </div>)

}
export default ResCategory;