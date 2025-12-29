import { MoveLeft, MoveRight } from "lucide-react";
import { ProductItem } from "../entities";
import { ErrorMessage, Select, Skeleton } from "../shared/components";
import { SORT_SELECT_ITEMS } from "../shared/constants";
import { useProducts } from "../shared/hooks";
import { useState } from "react";

export const Offers = () => {
  const [sortBy, setSortBy] = useState<{ key: string; value: string }>({
    key: "_id",
    value: "asc",
  });
  const sortByValue = `${sortBy.key}-${sortBy.value}`;
  
  const { getProducts } = useProducts();
  const { error, data, isPending } = getProducts({
    sortBy: sortByValue,
  });
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <section className="bg-[#f8f8f8] ">
      <div className="container py-37.5">
        <h2 className="title">
          Спецпредложения <span className="text-accent">{data?.length}</span>
        </h2>
        <Select
          setSort={setSortBy}
          sortBy={sortByValue}
          options={SORT_SELECT_ITEMS}
        />
        {/* TODO: ADD SLIDER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-5 mt-10">
          {isPending
            ? [...new Array(6)].map((_, index) => (
                <Skeleton className="w-full h-203.5" key={index} />
              ))
            : data.map((product) => <ProductItem product={product} />)}
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
