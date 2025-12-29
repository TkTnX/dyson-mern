import { MoveRight } from "lucide-react";
import { Link } from "react-router";
import type { ICategory } from "../../shared/types";

type Props = {
  category: ICategory;
};

export const CategoryItem = ({ category }: Props) => {
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="rounded-xl  overflow-hidden bg-white group"
    >
      <img src={category.image} alt={category.name} />
      <div className="pt-2.5 lg:pt-5 pb-3.5  lg:pb-7.5 px-3 lg:px-10 flex flex-col gap-2.5 group-hover:bg-black group-hover:text-white transition">
        <h4 className="font-black text-base lg:text-3xl font-second">
          {category.name}
        </h4>
        <p className="flex items-center gap-1 md:gap-5 text-xs lg:text-2xl">
          Подробнее <MoveRight />{" "}
        </p>
      </div>
    </Link>
  );
};
