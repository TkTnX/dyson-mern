import { useParams } from "react-router";
import { useProducts } from "../shared/hooks";
import { Breadcrumbs, ErrorMessage, Skeleton } from "../shared/components";
import { BigProduct, BigProductTabs } from "../entities";
import { Faq, SimmilarProductsList } from "../widgets";
import { Play } from "lucide-react";

export const ProductPage = () => {
  const { productId } = useParams();
  const { getProduct } = useProducts();
  const { data, isPending, error } = getProduct(productId!);

  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: data?.category.name || "",
            href: `/categories/${data?.category.slug}`,
          },
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
        <>
          <section className="container">
            <BigProduct product={data} />
          </section>
          <BigProductTabs product={data} />

          <Faq className="bg-transparent!" />
          <div className="container bg-[#e2e2e2] w-full h-190 flex items-center justify-center cursor-pointer">
            <Play size={100} fill="#fff" color="#fff" />
          </div>
          <SimmilarProductsList slug={data.category.slug} />
        </>
      )}
    </>
  );
};
