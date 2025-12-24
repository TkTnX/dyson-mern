import { Minus, Plus } from "lucide-react";
import { Button } from "../../shared/components";

export const ProductItem = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden">
      <img src="/images/temp/fan2.jpg" alt="FAN 2" />
      <div className="pt-10 ">
        <h4 className="font-light  text-xs lg:text-2xl px-2.5 lg:px-10">
          Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
          расческамия
        </h4>
        <div className="mt-6  flex items-center justify-between px-2.5 lg:px-10">
          <div className="flex items-center gap-2 sm:gap-5 text-green">
            <div className="w-3.5 h-3.5 bg-green rounded-full hidden vsm:block" />
            <p className="text-xs lg:text-base">В наличии</p>
          </div>
          <div className="rounded-sm px-2 py-2 lg:px-7 text-white text-sm sm:text-base  lg:text-2xl bg-accent">
            -15%
          </div>
        </div>
        <div className="flex flex-wrap  lg:flex-col xl:flex-row items-end justify-between px-2.5 lg:px-10">
          <h6 className="font-second text-xl lg:text-5xl font-black">
            59 990Р
          </h6>
          <p className="font-second text-xs lg:text-2xl font-black line-through text-[#ababab]">
            69 990 Р
          </p>
        </div>
        <div className="mt-10 flex flex-col 2xl:flex-row items-stretch">
          <div className="hidden lg:flex items-center gap-12 py-6 border justify-center rounded-t-xl 2xl:rounded-t-none 2xl:rounded-l-xl flex-1 px-4  ">
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>
          <Button className="bg-black hover:bg-accent! rounded-t-none 2xl:rounded-l-none flex-1 px-0">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
