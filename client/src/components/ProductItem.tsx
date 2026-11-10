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
      <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
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
