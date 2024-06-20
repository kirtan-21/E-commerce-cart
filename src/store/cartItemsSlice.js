import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Logic for adding item and increment
       
       //finding index 
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    //decrement item

    decrementItem: (state, action) => {
        //finding index
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        state.carts[itemIndex_dec].qnty -= 1;
      }
    },

    removeFromCart: (state, action) => {
      // Logic for removing item from cart
      console.log("this is slice stae", state);
      const data = state.carts.filter((item) => item.id !== action.payload);
      state.carts = data;
    },
    removeAllFromCart: (state, action) => {
      state.carts = [];
    },
  },
});

export const cartAction = cartItemsSlice.actions;
export default cartItemsSlice;
