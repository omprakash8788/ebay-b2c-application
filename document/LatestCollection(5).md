```
LatestCollection.jsx
```

Note - mount inside Home.tsx

```
import { useAppSelector } from "../app/hooks";
import ProductItem from "./ProductItem";
import Title from "./Title";

interface LatestProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

const LatestCollection = () => {
  const products = useAppSelector((state) => state.shop.products);

  const latestProducts: LatestProps[] = products.slice(0, 12);
  // console.log(products);

  return (
    <div className="my-10">
      <div className="text-center">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Our Latest Collection brings together forward-thinking design, premium
          materials, and effortless versatility to redefine your everyday
          wardrobe.
        </p>
      </div>
  
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3">
        {Array.from(
          { length: Math.ceil(latestProducts.length / 4) },
          (_, index) => latestProducts.slice(index * 4, index * 4 + 4),
        ).map((group, index) => (
          <div
            key={index}
            className="min-w-0 mt-4 rounded-3xl p-3 md:p-4 bg-linear-to-br from-blue-500 via-red-300 to-orange-400"
          >
            <h2 className="text-lg text-red-500 bg-white w-fit rounded px-1 md:text-xl font-semibold mb-4">
              {
                [
                  "Latest Arrivals",
                  "Featured Products",
                  "Trending Styles",
                  "Popular Collections",
                ][index % 4]
              }
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {group.map((item) => (
                <div
                  key={item._id}
                  className="min-w-0 overflow-hidden rounded-2xl bg-white"
                >
                  <ProductItem productData={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

```

`ProductItem.tsx`

```
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

interface ProductItemProps {
  productData: Product;
}

const ProductItem = ({ productData }: ProductItemProps) => {
  const currency = useAppSelector((state) => state.shop.currency);
  console.log(productData);

  return (
    <Link
      to={`/product/${productData._id}`}
      className="text-gray-700 cursor-pointer"
    >
      <div className="bg-white rounded-2xl overflow-hidden">
        <img
          src={productData.image[0]}
          alt={productData.name}
          className="w-full aspect-square object-cover"
        />

        <div className="p-2">
          <p className="text-sm truncate">{productData.name}</p>
          <p className="text-lg font-medium"> {currency} {productData.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

```
Title.tsx
```

```
import React from 'react'
<!-- This data coming from props   -->
const Title = ({text1, text2}) => {
return (

<div className='inline-flex gap-2 items-center mb-3'> 
<p className='text-gray-500 text-[20px] 
'>{text1} <span className='text-gray-700 font
medium'>{text2}</span></p> 
       {/* we use this second paragraph as a line */} 
       <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> 
    </div> 
  ) 
} 
 
export default Title

```


