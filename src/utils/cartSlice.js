import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
           let exist= state.items.filter(item=> item.id===action.payload.id)
         
            if(exist.length>0){
                state.items.filter(item=>{
                    if(item.id===action.payload.id)
                    {
                        item.qty+=1;
                    }
                })
                 
            }else{
                console.log(action.payload)
              
                action.payload.qty=1;
                console.log(action.payload)
                state.items.push(action.payload)
            }
              
        },
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1);
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;