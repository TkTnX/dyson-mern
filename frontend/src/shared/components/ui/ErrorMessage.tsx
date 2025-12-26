interface Props {
  className?: string;
  message: string;
}

export const ErrorMessage = ({ className, message }: Props) => {
  return (
    <p className={`text-red-500 text-center my-10 ${className}`}>{message}</p>
  );
};
