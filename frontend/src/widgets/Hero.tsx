import { Link } from "react-router";
import { Button } from "../shared/components";

export const Hero = () => {
  return (
    <section className="mt-0! bg-[#dddddd] relative sm:h-auto h-98 overflow-hidden">
      <div className="container flex items-center justify-between ">
        <div className="flex-1 max-w-72.5 sm:max-w-90.75 md:max-w-139">
          <h1 className="font-black text-2xl sm:text-[30px] md:text-[46px] font-second leading-none mt-12.5 sm:mt-0 relative z-2">
            Уникальные технологии для ухода за волосами
          </h1>
          <p className="mt-5 md:mt-10 text-xs md:text-2xl relative z-2">
            Идеальная укладка для всех типов волос вместе с Dyson
          </p>
          <Button className="mt-10 md:mt-22.5 p-0! relative z-2">
            <Link
              to={"/catalog"}
              className="py-2 px-6.5  md:py-3.75 md:px-12.5 block"
            >
              Подробнее
            </Link>
          </Button>
        </div>
        <div className="flex-1 absolute -right-10 -bottom-10 sm:static">
          <img
            className="sm:max-h-212.5 max-h-68.5"
            src="/images/hero/image.jpg"
            alt="HERO IMAGE"
          />
        </div>
      </div>
    </section>
  );
};
