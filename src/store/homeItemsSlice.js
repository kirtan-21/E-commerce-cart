import { createSlice } from "@reduxjs/toolkit";
import CardData from "../components/CardData";

const homeItemsSlice = createSlice({
  name: "items",
  initialState: CardData,
  reducers: {
    addInitialItems: (state) => {
       
      return state;
    },
  },
});

export const homeItemsActions = homeItemsSlice.actions;
export default homeItemsSlice;
