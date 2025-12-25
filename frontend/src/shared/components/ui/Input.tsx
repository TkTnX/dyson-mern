interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={`border-b placeholder:text-[#ababab] pb-4 pr-4 focus-within:outline-none ${className}`}
      {...props}
    />
  );
};
