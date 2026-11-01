import {createSlice} from "@reduxjs/toolkit";

import { products } from "../../assets/assets";

const initialState ={
    products:products,
    currency:"$",
    delivery_fee:10,

}

const shopSlice= createSlice({
    name:"shop",
    initialState,
    reducers:{

    }
})

export default shopSlice.reducer;

