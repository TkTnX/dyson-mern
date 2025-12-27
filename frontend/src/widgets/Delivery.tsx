export const Delivery = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-7.5">
      <div>
        <h3 className="font-black text-sm sm:text-xl md:text-3xl">
          Доставка по Москве
        </h3>
        <ul className="list-disc ml-6 mt-5 text-xs sm:text-base md:mt-7.5 font-second font-light">
          <li>
            Доставка продукции по Москве и МО в течении 2 часов в день заказа
            или в любой удобный день.
          </li>
          <li>Стоимость доставки по Москве – 0 р.</li>
          <li>Стоимость доставки за МКАД – 500 р. до 10 км </li>
          <li>
            Стоимость доставки более 10 км – рассчитывается отдельно оператором
          </li>
          <li>
            Оплата возможна при получении курьеру после проверки продукции
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-black text-sm sm:text-xl md:text-3xl">
          Доставка в регионы
        </h3>
        <ul className="list-disc ml-6 mt-5 text-xs sm:text-base md:mt-7.5 font-second font-light">
          <li>
            Стоимость доставки в регионы осуществляется компанией boxberry и
            рассчитывается отдельно оператором
          </li>
          <li>
            Оплата возможна при получении курьеру после проверки продукции
          </li>
        </ul>
      </div>
    </div>
  );
};
