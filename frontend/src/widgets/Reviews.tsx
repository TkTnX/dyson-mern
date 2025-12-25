import { MoveDownRight, Star } from "lucide-react";
import { Button } from "../shared/components";
import { ReviewItem } from "../entities";

export const Reviews = () => {
  return (
    <section className="container">
      <h2 className="title">
        Отзывы <span className="text-accent">151</span>
      </h2>
      {/* TODO: MOVE TO FEATURES */}
      <div className="mt-7 flex vsm:items-center justify-between sm:justify-start gap-4 sm:gap-17.5 flex-col vsm:flex-row">
        <div>
          <p className="text-xl">
            <span className="font-medium text-3xl">5</span>/5
          </p>
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

        <Button variant={"outline"}>Написать отзыв</Button>
      </div>

      {/* REVIEWS LIST */}
      <div className="mt-12.5 border-t border-[#ababab]">
        {[...new Array(5)].map((_, index) => (
          <ReviewItem key={index} />
        ))}
      </div>
      <Button
        className="flex items-center justify-center gap-7.5 mx-auto mt-20"
        variant="outline"
      >
        <span>Показать ещё</span> <MoveDownRight />{" "}
      </Button>
    </section>
  );
};
