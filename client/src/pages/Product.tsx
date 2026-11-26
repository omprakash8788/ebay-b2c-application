import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";

const Product = () => {
  const { productId } = useParams();
  const products = useAppSelector((state) => state.shop.products);

  const [image, setImage] = useState<string | null>(null);

  const productData = products.find((item) => item._id === productId);

  //  const image = productData?.image?.[0] ?? "";

  useEffect(() => {
    setImage(productData?.image?.[0] ?? null);
  }, [productId, productData?.image]);

  return productData ? (
    <div>
      <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 flex-col sm:flex-row">
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  alt="img"
                  className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                />
              ))}
            </div>
            {/* right side img */}
            <div className="w-full sm:w-[80%]">
              <div className="w-full sm:w-[80%]">
                {image ? (
                  <img className="w-full h-auto" src={image} alt="Product" />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0">No data</div>
  );
};

export default Product;
