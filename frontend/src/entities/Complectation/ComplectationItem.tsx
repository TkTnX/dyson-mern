import type { IComplecation } from "../../shared/types";

interface Props {
  complectation: IComplecation;
}

export const ComplectationItem = ({ complectation }: Props) => {
  return (
    <div className="flex flex-col vsm:flex-row items-center gap-5 bg-white rounded-sm sm:px-10">
      <img
        className="flex-1 max-w-35 sm:max-w-fit"
        src={complectation.image}
        alt={complectation.title}
      />
      <div className="flex flex-col gap-2 sm:gap-5 py-4 px-4 vsm:px-0 sm:py-10 flex-1 ">
        <h3 className="font-black text-sm sm:text-xl md:text-3xl">
          {complectation.title}
        </h3>
        <p className="font-second text-xs sm:text-base font-light">
          {complectation.description}
        </p>
      </div>
    </div>
  );
};
