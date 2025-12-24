import { WHYWE_ITEMS } from "../shared/constants";

export const WhyWe = () => {
  return (
    <section className="container  ">
      <h2 className="font-second text-5xl font-black">Почему выбирают нас</h2>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-14.5 ">
        {WHYWE_ITEMS.map((item, index) => (
          <div
            className="bg-white flex sm:flex-col items-center justify-center gap-3.5 shadow-lg px-2 py-10 sm:p-12.5 sm:text-center"
            key={index}
          >
            <img
              className="sm:max-w-full max-w-18.5"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-3.5">
              <h5 className=" font-second font-black text-sm md:text-xl ">
                {item.title}
              </h5>
              <p className="text-xs sm:text-base sm:max-w-55">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
