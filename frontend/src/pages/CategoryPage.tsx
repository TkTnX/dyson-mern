import { useParams } from "react-router";
import { useProducts } from "../shared/hooks";
import { Breadcrumbs, ErrorMessage, Select } from "../shared/components";
import { Loader2Icon } from "lucide-react";
import { ProductItem } from "../entities";
import { SORT_SELECT_ITEMS } from "../shared/constants";
import { useState } from "react";

export const CategoryPage = () => {
  const [sortBy, setSortBy] = useState<{ key: string; value: string }>({
    key: "_id",
    value: "asc",
  });
  const sortByValue = `${sortBy.key}-${sortBy.value}`;

  const { slug } = useParams();
  const { getProducts } = useProducts();
  const { data, isPending, error } = getProducts({
    category: slug!,
    sortBy: sortByValue,
  });

  if (isPending)
    //   TODO: MOVE TO LOADER COMPONENT
    return (
      <div className="absolute bg-white inset-0 h-screen z-10 flex items-center justify-center ">
        <Loader2Icon className="animate-spin" />
      </div>
    );

  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="flex items-center justify-center container">
        <Breadcrumbs items={[{ label: data[0]?.category.name || "" }]} />
        {/* TODO: ADD SORT */}
        <Select
          setSort={setSortBy}
          className="flex-1"
          options={SORT_SELECT_ITEMS}
          sortBy={sortByValue}
        />
      </div>
      <section className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5 mt-20">
          {data.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      </section>
    </>
  );
};
