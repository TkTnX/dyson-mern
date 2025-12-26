import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

export const ProductCounter = ({ className }: Props) => {
  const [count, setCount] = useState(1);
  return (
    <div
      className={`hidden lg:flex items-center gap-12 py-6 border justify-center rounded-t-xl 2xl:rounded-t-none 2xl:rounded-l-xl flex-1 px-4 ${className} `}
    >
      <button
        disabled={count === 1}
        className="disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => setCount(count - 1)}
      >
        <Minus />
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        <Plus />
      </button>
    </div>
  );
};
