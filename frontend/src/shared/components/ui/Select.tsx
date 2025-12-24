import { ChevronDown } from "lucide-react";
import { useState, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  className?: string;
}

export const Select = ({ options, className, ...props }: Props) => {
  return (
    <div className="relative group  border border-accent hover:text-accent flex items-center w-fit  cursor-pointer rounded-sm ml-auto mt-12">
      <select
        className={`w-full  focus-visible:outline-none z-2 relative  py-2 px-6 pr-10 appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            className="bg-white border-b text-text"
            key={option.value}
            value={option.value}
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
