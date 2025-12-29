import { CategoryItem } from "../entities";
import { ErrorMessage, Skeleton } from "../shared/components";
import { useCategories } from "../shared/hooks";

export const CategoriesList = () => {
  const { getCategories } = useCategories();
  const { data, isPending, error } = getCategories();

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <section className="container  grid grid-cols-2 sm:grid-cols-4 bg-[#f2f2f2] gap-2.5 sm:gap-5 py-3 shadow-sm">
      {isPending
        ? [...new Array(6)].map((_, index) => (
            <Skeleton className="w-full h-112.5" key={index} />
          ))
        : data.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
    </section>
  );
};
