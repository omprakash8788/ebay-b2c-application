import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { products } from "../../assets/assets";

interface shopState {
    products: typeof products;
    currency: string;
    delivery_fee: number;
    search: string;
    showSearch: boolean;
}

const initialState: shopState = {
    products: products,
    currency: "$",
    delivery_fee: 10,

    // Search state
    search: "",
    showSearch: false

}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setShowSearch: (state, action: PayloadAction<boolean>) => {
            state.showSearch = action.payload;
        }
    }
})

  export const {setSearch, setShowSearch} = shopSlice.actions;

export default shopSlice.reducer;

