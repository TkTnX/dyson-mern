import { ChevronDown } from "lucide-react";
import { type HTMLAttributes } from "react";
import { useSearchParams } from "react-router";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string; key: string }[];
  className?: string;
  setSort: (obj: { key: string; value: string }) => void;
  sortBy: string;
}

export const Select = ({
  options,
  className,
  setSort,
  sortBy,
  ...props
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [key, value] = e.target.value.split("-");
    setSort({
      key,
      value,
    });
    setSearchParams({ sortBy: e.target.value });
    console.log(searchParams.get("sortBy"));
  };

  return (
    <div className="relative group  border border-accent hover:text-accent flex items-center w-fit  cursor-pointer rounded-sm ml-auto mt-12">
      <select
        defaultValue={sortBy}
        value={sortBy}
        onChange={onChange}
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
