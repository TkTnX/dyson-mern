import { Plus } from "lucide-react";
import { FAQ } from "../shared/constants";
import { useState } from "react";

export const Faq = () => {
  const [open, setOpen] = useState<null | number>(null);

  const onClick = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className="bg-[#f8f8f8]">
      <div className="container py-37.5 ">
        <h2 className="font-black text-5xl font-second">
          FAQ — Часто задаваемые вопросы
        </h2>

        <div className="mt-15 border-t border-[#ababab]">
          {FAQ.map((question, index) => (
            <div className=" border-b border-[#ababab]" key={index}>
              <button
                onClick={() => onClick(index)}
                className="flex py-8.5 items-center justify-between w-full"
              >
                <h6 className="text-xl">{question.title}</h6>
                <Plus
                  className={`${open === index && "rotate-45"} transition `}
                  size={36}
                />
              </button>
              <p
                className={`pb-5 font-bold transition overflow-hidden ${
                  open === index ? "block" : "hidden"
                }`}
              >
                {question.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
