import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const Cart = ()=>{


    const cartItems = useSelector((store)=> store.cart.items)
    const totalAmount = useSelector((store)=> store.cart.total)
    const dispatch = useDispatch();
const deleteItem = (index)=>{
dispatch(removeItem(index));
}
const checkout = ()=>{
  dispatch(checkout());
  }
 return (cartItems.length==0 ? <EmptyCart/>: (
        <div className="relative z-10 " aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        
        
     
            <div className="pointer-events-none flex justify-center inset-y-0 right-0 flex w-full pl-10">
             
              <div className="pointer-events-auto w-screen w-1/2 ">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      <div className="ml-3 flex h-7 items-center">
                        
                      </div>
                    </div>
      
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                         {cartItems.map((item,i)=>(
                            
                            <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={CDN_URL+ item.imageId} className="h-full w-full object-cover object-center"/>
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                    <a href="#">{item.name}</a>
                                    </h3>
                                    <p className="ml-4">${item.price/100 ?? item.defaultPrice/100}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 w-1/2">{item.description}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {item.qty}</p>

                                <div className="flex">
                                    <button type="button"
                                    onClick={()=>{
                                      deleteItem(i)
                                    }}
                                    
                                    className="font-medium  text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                                </div>
                            </div>
                            </li>
                         ))}
                        
                         
                        </ul>
                      </div>
                    </div>
                  </div>
      
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${totalAmount}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <button  onClick={()=>{
                                      checkout(i)
                                    }}
                                     className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <Link to="/" >
                      <button type="button" className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
                              Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                      </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
         </div>
    ));
}
export default Cart;