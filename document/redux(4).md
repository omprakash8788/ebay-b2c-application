

```
npm install @reduxjs/toolkit react-redux
```

```
src/
├── app/
│   └── store.ts 
|   └── hooks.ts 
├── features/
│   └── shop/
│       └── shopSlice.ts
├── assets/
│   └── frontendassets/
│       └── assets.ts
├── App.jsx
└── main.jsx
```

`shopSlice.ts`

```
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



```

`hooks.ts`

```
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
```

---

`store.ts`

```
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
    reducer:{
        shop:shopReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


```

### After that register inside `main.tsx`

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);

```

Note - `Redux setup is done`



