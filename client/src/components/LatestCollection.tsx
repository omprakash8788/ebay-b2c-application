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
