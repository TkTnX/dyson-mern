import { Button } from "../../shared/components";
import type { IProduct } from "../../shared/types";
import { Link } from "react-router";
import { ProductCounter } from "../../features";

interface Props {
  product: IProduct;
}

export const ProductItem = ({ product }: Props) => {
  const discount = product.discount && (product.price / 100) * product.discount;
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden flex flex-col relative">
      <Link to={`/products/${product._id}`} className="absolute inset-0"></Link>
      <img src="/images/temp/fan2.jpg" alt="FAN 2" />
      <div className="pt-10 flex flex-col gap-10 flex-1 ">
        <div className="flex-1">
          <h4 className="font-light  text-xs lg:text-2xl px-2.5 lg:px-10">
            {product.title}
          </h4>
          <div className="mt-6  flex items-center justify-between px-2.5 lg:px-10">
            <div className="flex items-center gap-2 sm:gap-5 text-green">
              <div
                className={`w-3.5 h-3.5  rounded-full hidden vsm:block ${
                  product.isStock ? "bg-green" : "bg-red-500"
                }`}
              />
              <p
                className={`text-xs lg:text-base ${
                  !product.isStock && "text-red-500"
                }`}
              >
                {product.isStock ? "В наличии" : "Отсутствует"}
              </p>
            </div>
            {product.discount && (
              <div className="rounded-sm px-2 py-2 lg:px-7 text-white text-sm sm:text-base  lg:text-2xl bg-accent">
                -{product.discount}%
              </div>
            )}
          </div>
          <div className="flex flex-wrap  lg:flex-col xl:flex-row items-end justify-between px-2.5 lg:px-10">
            <h6 className="font-second text-xl lg:text-5xl font-black">
              {/* TODO: ADD FORMAT FUNCTION */}
              {product.discount ? product.price - discount! : product.price}Р
            </h6>

            {product.discount && (
              <p
                className={`font-second text-xs  lg:text-2xl font-black line-through text-gray-500 `}
              >
                {product.price} Р
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row items-stretch relative z-2">
          <ProductCounter />
          <Button className="bg-black hover:bg-accent! rounded-t-none 2xl:rounded-l-none flex-1 px-0">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
