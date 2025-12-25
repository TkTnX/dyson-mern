import { Star } from "lucide-react";

export const ReviewItem = () => {
  return (
    <div className="border-b border-[#ababab] py-10 flex flex-col sm:flex-row items-start gap-2.5 sm:gap-17.5">
      <div className="flex flex-col gap-3.5">
        <h4 className="text-xl font-medium">Ольга</h4>
        <div className="flex items-center gap-1">
          {[...new Array(5)].map((_, index) => (
            <Star
              className="w-4 h-4 sm:w-auto sm:h-auto"
              fill="#000"
              color="#000"
              key={index}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">Это лучший фен!</h4>
          <p className="text-lg font-light text-[#909090]">21/05/2022</p>
        </div>
        <p className="text-lg font-light mt-2.5">
          Пользуюсь около месяца, хочу поделиться впечатлениями. Во-первых, фен
          очень легкий, удобно лежит в руке, не скользит. Кнопка включения и
          выключения расположена удобно, а не где-то сбоку. Мощность у фена
          хорошая, волосы сушит быстро
        </p>
        <div className="flex items-center gap-5 mt-7.5 flex-wrap">
          {[...new Array(3)].map((_, index) => (
            <img
              src="/images/temp/review1.jpg"
              alt="REVIEW"
              className="rounded-2xl max-w-14 sm:max-w-20 max-h-14 sm:max-h-20 w-full h-full"
              key={index}
            />
          ))}
        </div>
        <button className="underline text-accent text-lg mt-2.5">
          Смотреть все фото
        </button>
      </div>
    </div>
  );
};
