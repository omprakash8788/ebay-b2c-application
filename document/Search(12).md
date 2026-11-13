## We are implementing search feature inside our App

```
client/
└── src/
    ├── app/
    │   ├── hooks.ts
    │   └── store.ts
    │
    ├── features/
    │   └── shop/
    │       └── shopSlice.ts
    │
    ├── components/
    ├── pages/
    ├── App.tsx
    └── main.tsx

```

`shopSlice.ts`

```

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../assets/assets";

interface ShopState {
  products: typeof products;
  currency: string;
  delivery_fee: number;
  search: string;
  showSearch: boolean;
}

const initialState: ShopState = {
  products: products,
  currency: "$",
  delivery_fee: 10,

  // Search state
  search: "",
  showSearch: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,

  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
  },
});

// Export actions
export const { setSearch, setShowSearch } = shopSlice.actions;

// Export reducer
export default shopSlice.reducer;

```


### After that create `SearchBar.tsx` component


```
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { assets } from "../assets/assets";
import { setSearch, setShowSearch } from "../features/shop/shopSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.shop.search);
  const showSearch = useAppSelector((state) => state.shop.showSearch);

  return showSearch ? (
    <div className="border-b border-gray-300 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search..."
        />
        <img className="w-4" src={assets.search_icon} alt="sicon" />
      </div>
      <img
        onClick={() => dispatch(setShowSearch(false))}
        src={assets.cross_icon}
        alt="icon"
        className="w-3 inline cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;

```

### update the Slice also 
```
const initialState: shopState = {
    products: products,
    currency: "$",
    delivery_fee: 10,

    // Search state
    search: "",
    showSearch: false

}
```

### now update the `navbar.tsx `
```
import { useAppDispatch} from "../app/hooks";
import { setShowSearch } from "../features/shop/shopSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

      <div className="flex items-center gap-6">
        <ImSearch onClick={()=>dispatch(setShowSearch(true))} className="w-5 h-5 cursor-pointer" />
        <div className="group relative">
```

## next we need to write logic to show search section only on collection page 

`for that we need to update SearchBar.tsx`

```
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.shop.search);
  const showSearch = useAppSelector((state) => state.shop.showSearch);

  const location = useLocation();

  const visible = location.pathname.includes("collection");

  return showSearch && visible ? (
```

### now add logic for search item 

`for that open Collection.tsx`

```
const Collection = () => {
  const products = useAppSelector((state) => state.shop.products);
  const [showFilter, setShowFilter] = useState<boolean>(false);

const search = useAppSelector((state) => state.shop.search);
  const showSearch = useAppSelector((state) => state.shop.showSearch);


   const filterProducts = useMemo(() => {
    let productCopy = [...products];

     if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
     }

    // Category filtering
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Subcategory filtering
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting
    switch (sortType) {
      case "low-high":
        productCopy.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        productCopy.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    return productCopy;
  }, [products, category, subCategory, sortType, search, showSearch]);

  
```
