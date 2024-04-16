import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../store";
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

  if (link === "/mistake") {
    const { userInfo } = useSelector((state: RootState) => state.auth);
    link = `/${userInfo.username}`;
  }

  return (
    <div className="px-4 mt-3">
      <Link
        to={link ? link : "/"}
        target={target}
        className={`${
          active == link
            ? "bg-input bg-opacity-20"
            : "hover:bg-input hover:bg-opacity-10 hover:text-emphasis"
        } text-default group flex items-center justify-center rounded-md px-8 py-3 font-medium transition mt-0.5 text-sm hover:bg-subtle`}
      >
        <div dangerouslySetInnerHTML={{ __html: svg ? svg : "" }} />

        <span className="ml-2 lg:ml-4 lg:w-full justify-between text-lg lg:flex">
          <div className="text-mainText">{name}</div>
        </span>
      </Link>
    </div>
  );
};

export default SideLinks;
