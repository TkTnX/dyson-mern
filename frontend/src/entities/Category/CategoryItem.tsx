import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export const CategoryItem = () => {
  return (
    <Link
      to={"/catalog/fans"}
      className="rounded-xl  overflow-hidden bg-white group"
    >
      <img src="/images/temp/fan.jpg" alt="Fan" />
      <div className="pt-2.5 lg:pt-5 pb-3.5  lg:pb-7.5 px-3 lg:px-10 flex flex-col gap-2.5 group-hover:bg-black group-hover:text-white transition">
        <h4 className="font-black text-base lg:text-3xl font-second">Фены</h4>
        <p className="flex items-center gap-1 md:gap-5 text-xs lg:text-2xl">
          Подробнее <MoveRight />{" "}
        </p>
      </div>
    </Link>
  );
};
