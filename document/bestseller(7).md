
```
import { useAppSelector } from "../app/hooks";
import ProductItem from "./ProductItem";
import Title from "./Title";

interface BestProps {
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

const BestSeller = () => {
  const products = useAppSelector((state) => state.shop.products);

  const bestProducts: BestProps[] = products.slice(0, 5);
  console.log(bestProducts);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="Best" text2="Sellers" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Our Latest Collection brings together forward-thinking design, premium
          materials, and effortless versatility to redefine your everyday
          wardrobe.
        </p>
      </div>

      <div className="w-full rounded-xl p-2 bg-gray-300 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3 mt-4">
        {bestProducts.map((item, index) => {
            const discount = 30 -index;
          return (
            <div
              key={item._id}
              className="group relative min-w-0 overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl"
            >
              <span className="left-3 absolute top-3 z-10 rounded-md bg-red-500 px-3 py-1 text-sm font-semibold text-white opacity-100 -translate-y-2 transition-all duration-100 group-hover:opacity-100 group-hover:translate-y-0">
                {discount}% OFF
              </span>
              <ProductItem productData={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;



```

Mount inside Home.tsx

```
mport Hero from "../components/Hero" 
import LatestCollection from "../components/LatestCollection" 
 
const Home = () => { 
  return ( 
    <div> 
      <Hero/> 
      <LatestCollection/> 
      <BestSeller/> 
    </div> 
  ) 
} 
 
export default Home 

```

