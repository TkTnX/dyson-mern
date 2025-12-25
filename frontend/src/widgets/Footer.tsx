import { Link } from "react-router";
import { FOOTER_ITEMS, FOOTER_SOCIALS } from "../shared/constants";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12.5">
        <div>
          <img src="/images/icons/logo.svg" />
        </div>
        <Link
          to={"/about"}
          className="mt-6 inline-block font-black text-2xl font-second"
        >
          О компании
        </Link>
        <div className="mt-7.5 grid grid-cols-2 sm:grid-cols-4 justify-between gap-4 items-start">
          {FOOTER_ITEMS.map((item) => (
            <div className="">
              <h6 className="font-black text-sm lg:text-2xl font-second">
                {item.title}
              </h6>
              <nav className="mt-2.5">
                <ul className="flex flex-col gap-1 md:gap-1.5">
                  {item.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="font-light hover:underline text-xs lg:text-base"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
          <div className="flex flex-col gap-3 lg:gap-14">
            <div className="text-sm lg:text-2xl">
              <h6 className="font-black  font-second">Отдел логистики:</h6>
              <a className="font-bold" href="tel:+79998004554">
                {" "}
                +7 (999) 800-45-54
              </a>
            </div>
            <div className="flex items-center gap-5">
              {FOOTER_SOCIALS.map((social) => (
                <Link className="hover:opacity-80" to={social.href}>
                  <img
                    className="lg:w-auto lg:h-auto w-5 h-5"
                    src={social.image}
                    alt={"social"}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="font-light mt-10 text-xs sm:text-base text-center">
          Интернет-магазин dysmarket.ru, 2022 © Все права защищены.
        </p>
      </div>
    </footer>
  );
};
