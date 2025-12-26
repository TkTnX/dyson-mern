import { Link } from "react-router";

interface Props {
  items: { label: string; href?: string }[];
}

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <ul className="container flex items-center gap-2 mt-12.5 flex-wrap">
      <li className="text-xl font-light text-[#ababab] font-second flex items-center gap-1">
        <Link to={"/"}>Главная</Link> /
      </li>
      {items.map((item, index) => (
        <li
          className="text-xl font-light text-[#ababab] font-second flex items-center gap-1"
          key={index}
        >
          {item.href ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <p className="text-text">{item.label}</p>
          )}
          {index + 1 !== items.length && <span>/</span>}
        </li>
      ))}
    </ul>
  );
};
