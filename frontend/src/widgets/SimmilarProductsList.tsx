import { MoveDownRight } from "lucide-react";
import { ProductItem } from "../entities";
import { Button, ErrorMessage, Skeleton } from "../shared/components";
import { useProducts } from "../shared/hooks";

interface Props {
  slug: string;
}

export const SimmilarProductsList = ({ slug }: Props) => {
  const { getProducts } = useProducts();
  const { data, isPending, error } = getProducts({ category: slug });
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <section className="container">
      <h2 className="title">Похожие товары</h2>
      <div className="mt-15 grid vsm:grid-cols-2 md:grid-cols-3 gap-5">
        {isPending
          ? [...new Array(3)].map((_, index) => (
              <Skeleton className="w-full h-187.5" key={index} />
            ))
          : data.map((product) => (
              <ProductItem product={product} key={product._id} />
            ))}
      </div>
      <Button
        className="flex items-center justify-center gap-7.5 mx-auto mt-20"
        variant="outline"
      >
        <span>Показать ещё</span> <MoveDownRight />{" "}
      </Button>
    </section>
  );
};
