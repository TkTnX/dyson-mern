import { Button, Input } from "../shared/components";

export const Contact = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container flex flex-col sm:flex-row items-stretch justify-between gap-2 py-10 sm:py-16 md:py-37.5">
        <div className="flex-1">
          <h4 className="font-second font-bold text-xl md:text-5xl">
            Свяжитесь с нами
          </h4>
          <form className="flex flex-col gap-7.5 mt-12.5">
            <Input
              className="max-w-138.75"
              placeholder="Ваше имя"
              name="name"
            />
            <Input
              className="max-w-138.75"
              placeholder="Ваш номер телефона"
              name="tel"
              type="tel"
            />
            <Button className="bg-black hover:bg-accent! rounded-t-none 2xl:rounded-l-none  px-0 w-fit mt-5">
              Оставить заявку
            </Button>
          </form>
        </div>
        <div className="flex-1">
          <h4 className="font-second font-bold text-xl md:text-5xl">
            Свяжитесь с нами
          </h4>
          <form className="flex flex-col gap-7.5 mt-12.5">
            <Input
              className="max-w-138.75"
              placeholder="Ваш e-mail"
              name="email"
            />

            <Button className="bg-black hover:bg-accent! rounded-t-none 2xl:rounded-l-none  px-0 w-fit mt-5">
              Оставить заявку
            </Button>
            <label className="flex items-center gap-4">
              <input
                type="checkbox"
                className="min-w-4 md:min-w-7.5 min-h-4 md:min-h-7.5 accent-[#f8f8f8] p-2.5"
              />
              <p className="text-xs md:text-base">
                Я ознакомлен(а) с политикой конфиденциальности и согласен(а) с
                обработкой персональных данных
              </p>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};
