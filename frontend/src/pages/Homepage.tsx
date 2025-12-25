import {
  CategoriesList,
  Faq,
  Hero,
  News,
  Offers,
  Opinion,
  Reviews,
  WhyWe,
} from "../widgets";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <CategoriesList />
      <Opinion />
      <WhyWe />
      <Offers />
      <Reviews />
      <Faq />
      <News />
    </>
  );
};
