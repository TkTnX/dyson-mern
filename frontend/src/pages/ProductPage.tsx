import { useParams } from "react-router";
import { useProducts } from "../shared/hooks";
import { Breadcrumbs, ErrorMessage, Skeleton } from "../shared/components";
import { BigProduct } from "../entities";

export const ProductPage = () => {
  const { productId } = useParams();
  const { getProduct } = useProducts();
  const { data, isPending, error } = getProduct(productId!);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Каталог", href: "/catalog" },
          { label: data?.title || "" },
        ]}
      />
      {isPending ? (
        <div className="flex items-stretch justify-between gap-25 container mt-25">
          {[...new Array(2)].map((_, index) => (
            <Skeleton key={index} className="w-full h-80" />
          ))}
        </div>
      ) : (
        <section className="container">
          <BigProduct product={data} />
        </section>
      )}
    </>
  );
};
