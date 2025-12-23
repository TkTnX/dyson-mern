import { MenuIcon, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { NAV_ITEMS } from "../shared/constants";

export const Header = () => {
  return (
    <header className="bg-black">
      <div className="container flex items-center justify-between gap-1 2xl:gap-12 py-1.5">
        <button>
          <MenuIcon size={50} color="#fff" />
        </button>
        <Link className="md:mr-0 mr-auto" to={"/"}>
          <img src="/images/icons/logo.svg" alt="Logo" />
        </Link>
        <nav className="xl:block hidden">
          <ul className="flex items-center text-xl font-black text-white font-second gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link className="hover:opacity-80" to={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button>
          <ShoppingBag color="#fff" />
        </button>
      </div>
    </header>
  );
};
