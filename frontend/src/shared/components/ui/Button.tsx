import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={`rounded-sm py-2 px-6.5  md:py-3.75 md:px-12.5 bg-accent text-white text-base md:text-2xl hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
