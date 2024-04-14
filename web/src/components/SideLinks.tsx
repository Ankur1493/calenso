import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
interface props {
  name?: string;
  svg?: string;
  link?: string;
  target?: string;
}
const SideLinks = ({ name, svg, link, target }: props) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="px-2 mt-3">
      <Link
        to={link ? link : "/"}
        target={target}
        className={`${
          active == link
            ? "bg-input bg-opacity-20"
            : "hover:bg-input hover:bg-opacity-10 hover:text-emphasis"
        } todesktop:py-[7px] text-default group flex items-center rounded-md px-8 py-3 font-medium transition [&amp;[aria-current='page']]:bg-emphasis [&amp;[aria-current='page']]:text-emphasis mt-0.5 text-sm hover:bg-subtle todesktop:[&amp;[aria-current='page']]:bg-emphasis`}
      >
        <div dangerouslySetInnerHTML={{ __html: svg ? svg : "" }} />
        <span className="hidden ml-4 w-full justify-between text-[19px] lg:flex">
          <div className="flex text-mainText">{name}</div>
        </span>
      </Link>
    </div>
  );
};

export default SideLinks;
