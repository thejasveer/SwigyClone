import { Link } from "react-router-dom";

const Emptycart = () =>{
return (
    <div >
        <h1 className="flex text-red-400 justify-center items-center -mt-12 text-center text-3xl h-screen">Your cart is Empty ☹️ 
         <Link to="/" >
         <button type="button" className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </Link>
         </h1>
   
    </div>
   )



}
export default Emptycart;