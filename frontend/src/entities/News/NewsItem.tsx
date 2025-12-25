import { Link } from "react-router";

interface Props {
  className?:string
}

export const NewsItem = ({className}: Props) => {
  return (
    <div className={className}>
      <div>
        <img
          className="rounded-sm"
          src="/images/temp/news.jpg"
          alt="News item"
        />
      </div>
      <p className="mt-7.5 text-xs md:text-lg font-light text-[#909090]">
        21 декабря 2022
      </p>
      <h3 className="text-sm md:text-xl font-semibold mt-5 ">
        Есть ли безопасные выпрямители для волос
      </h3>
      <p className="font-light text-xs md:text-lg mt-4">
        Добавьте объем и рельеф коротким волосам. Посмотрите, как создать
        мягкие, легкие локоны и волны на коротких волосах и волосах средней
        длины.
      </p>
      <Link
        to={"/news/1"}
        className="underline text-xs sm:text-base text-accent mt-5 block"
      >
        Читать далее
      </Link>
    </div>
  );
};
