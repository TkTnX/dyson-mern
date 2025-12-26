interface Props {
  className?: string;
}

export const Skeleton = ({ className }: Props) => {
  return (
    <div className={`bg-gray-400 animate-pulse rounded-lg ${className}`}></div>
  );
};
