import { createSlice } from "@reduxjs/toolkit";

const counterSlice  = createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state,action){
      return state.filter((item)=>item.id !==action.payload)
    },
    increment(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrement(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    }
  }
})

export const {add,remove,increment,decrement}  = counterSlice.actions
export default counterSlice.reducer