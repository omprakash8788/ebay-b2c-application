import {useMemo, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const products = useAppSelector((state) => state.shop.products);
  // console.log(products)
  const [showFilter, setShowFilter] = useState<boolean>(false);

  // const [filterProducts, setFilterProducts] = useState(products);

  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);

  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // const applyFilter = () => {
  //   let productCopy = products.slice();
  //   if (category.length > 0) {
  //     productCopy = productCopy.filter((item) =>
  //       category.includes(item.category),
  //     );
  //   }

  //   if (subCategory.length > 0) {
  //     productCopy = productCopy.filter((item) =>
  //       subCategory.includes(item.subCategory),
  //     );
  //   }

  //   setFilterProducts(productCopy);
  // };

  // const sortProduct = () => {
  //   const filterProductCopy = filterProducts.slice();
  //   switch (sortType) {
  //     case "low-high":
  //       setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
  //       break;

  //     case "high-low":
  //       setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
  //       break;

  //     default:
  //       applyFilter();
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  // useEffect(() => {
  //   applyFilter();
  // }, [category, subCategory]);

  // useEffect(() => {
  //   sortProduct();
  // }, [sortType]);
  
   const filterProducts = useMemo(() => {
    let productCopy = [...products];

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
  }, [products, category, subCategory, sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter option */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <IoIosArrowDroprightCircle
            className={`h-5 w-5 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>
        {/*  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2 cursor-pointer"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid bg-gray-200 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 rounded-2xl p-2">
          {filterProducts.map((item) => (
            <ProductItem key={item._id} productData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
