import { MoveLeft, MoveRight } from "lucide-react";
import { ProductItem } from "../entities";
import { Select } from "../shared/components";
import { SORT_SELECT_ITEMS } from "../shared/constants";

export const Offers = () => {
  return (
    <section className="bg-[#f8f8f8] ">
      <div className="container py-37.5">
        <h2 className="title">
          Спецпредложения <span className="text-accent">14</span>
        </h2>
        <Select  options={SORT_SELECT_ITEMS} />
        {/* TODO: ADD SLIDER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-5 mt-10">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="flex items-center gap-5 mt-10 md:mt-32.5">
          <button className="w-9 md:w-16 h-9 md:h-16 rounded-sm border flex items-center justify-center hover:border-accent hover:text-accent transition">
            <MoveLeft />
          </button>
          <button className="w-9 md:w-16 h-9 md:h-16 rounded-sm border flex items-center justify-center hover:border-accent hover:text-accent transition">
            <MoveRight />
          </button>
          <p className="pl-2.5 md:text-2xl">1 из 3</p>
        </div>
      </div>
    </section>
  );
};
