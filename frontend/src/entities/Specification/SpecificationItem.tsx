import type { ISpecification } from "../../shared/types";

interface Props {
  specification: ISpecification;
}

export const SpecificationItem = ({ specification }: Props) => {
  return (
    <div className="py-10 border-b border-[#303030] grid grid-cols-2 items-center">
      <p className="font-light text-sm sm:text-base font-second">
        {specification.label}
      </p>
      <p className="font-black text-base sm:text-2xl md:text-3xl">
        {specification.value}
      </p>
    </div>
  );
};
