import { CategoryItem } from "../entities";

export const CategoriesList = () => {
  return (
    <section className="container  grid grid-cols-2 sm:grid-cols-4 bg-[#f2f2f2] gap-2.5 sm:gap-5 py-3 shadow-sm">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
};
