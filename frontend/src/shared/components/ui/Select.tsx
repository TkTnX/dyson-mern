import { ChevronDown } from "lucide-react";
import { type HTMLAttributes } from "react";
import { SORT_SELECT_ITEMS } from "../../constants";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string; key: string }[];
  className?: string;
  setSort: (obj: { key: string; value: string }) => void;
  sortBy: { key: string; value: string };
}

export const Select = ({
  options,
  className,
  setSort,
  sortBy,
  ...props
}: Props) => {
  return (
    <div className="relative group  border border-accent hover:text-accent flex items-center w-fit  cursor-pointer rounded-sm ml-auto mt-12">
      <select
        defaultValue={
          SORT_SELECT_ITEMS.find((item) => item.value === sortBy.value)?.value
        }
        onChange={(e) =>
          setSort({
            key: e.target.value.split("-")[0],
            value: e.target.value.split("-")[1],
          })
        }
        className={`w-full  focus-visible:outline-none z-2 relative  py-2 px-6 pr-10 appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            className="bg-white border-b text-text"
            key={option.value}
            value={`${option.key}-${option.value}`}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        color="none"
        fill="var(--accent-color)"
        className="absolute right-2 group-focus-within:rotate-180 transition"
      />
    </div>
  );
};
