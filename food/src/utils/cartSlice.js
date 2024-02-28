import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        total:0
    },
    reducers:{
        addItem:(state, action)=>{
            let currentItem = action.payload;
           let exist= state.items.filter(item=> item.id===currentItem.id)
            
            if(exist.length>0){
                state.items.filter(item=>{
                    if(item.id===currentItem.id)
                    {
                        item.qty+=1;
                        state.total+=currentItem.price/100 ?? currentItem.defaultPrice/100
                    }
                })
                 
            }else{
               
              
                currentItem.qty=1;
              
                state.items.push(currentItem)
                state.total+=currentItem.price/100 ?? currentItem.defaultPrice/100
            }
            MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500
              })
              
        },
        removeItem:(state,action)=>{
            let currentItem = action.payload;
            state.items.splice(currentItem ,1);
            state.total =0;
            state.items.forEach((v,i)=>{
                state.total += v.price/100 ?? v.defaultPrice/100
            })      
            MySwal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Item removed successfully',
                showConfirmButton: false,
                timer: 1500
              })
        },
        clearCart:(state)=>{
             
            state.items.length = 0;
            state.total=0;
        },
        checkout:(state)=>{
            state.items.length = 0;
            state.total=0;
            MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Checkout successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    }
});

export const {addItem,removeItem,clearCart,checkout} = cartSlice.actions;
export default cartSlice.reducer;