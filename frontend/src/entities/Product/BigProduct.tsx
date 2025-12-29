import { Heart } from "lucide-react";
import type { IProduct } from "../../shared/types";
import { ProductCounter } from "../../features";
import { Button } from "../../shared/components";
import { useState } from "react";

interface Props {
  product: IProduct;
}

export const BigProduct = ({ product }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const discount = product.discount && (product.price / 100) * product.discount;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
      <div className="relative w-fit flex flex-col-reverse sm:flex-row items-start gap-6">
        <div className=" flex sm:flex-col w-full">
          {product.images.map((image, index) => (
            <button onClick={() => setCurrentImage(index)} key={index}>
              <img
                className={`w-16 h-16 md:w-23.75 md:h-23.75 object-cover ${
                  currentImage !== index && "opacity-50"
                }`}
                src={image}
              />
            </button>
          ))}
        </div>
        <img
          className="lg:w-137.5 "
          src={product.images[currentImage]}
          alt={product.title}
        />
        <button className="absolute right-0 top-0">
          <Heart size={40} />
        </button>
      </div>
      <div className="lg:max-w-138.75">
        <h2 className="font-black text-base sm:text-2xl md:text-4xl">
          {product.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-second mt-10">
          {product.description}
        </p>
        <div className="mt-6  flex items-center justify-between  ">
          <div className="flex items-center gap-2 sm:gap-5 text-green">
            <div
              className={`w-3.5 h-3.5  rounded-full hidden vsm:block ${
                product.isStock ? "bg-green" : "bg-red-500"
              }`}
            />
            <p className="text-xs lg:text-base">
              {product.isStock ? "В наличии" : "Отсутсвует"}
            </p>
          </div>
          {product.discount && (
            <div className="rounded-sm px-2 py-2 lg:px-7 text-white text-sm sm:text-base  lg:text-2xl bg-accent">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="flex flex-wrap  lg:flex-col xl:flex-row items-end justify-between  mt-6">
          <h6 className="font-second text-5xl font-black">
            {/* TODO: ADD FORMAT FUNCTION */}
            {product.discount ? product.price - discount! : product.price}Р
          </h6>

          {product.discount && (
            <p
              className={`font-second    text-2xl font-black line-through text-[#ababab]   `}
            >
              {product.price} Р
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row  items-stretch relative z-2 gap-2.5 sm:gap-5 mt-8">
          <ProductCounter className="flex! lg:flex! rounded-sm!" />
          <Button className="bg-black hover:bg-accent! rounded-t-none 2xl:rounded-l-none flex-1 px-0">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
