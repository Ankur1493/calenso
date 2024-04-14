import { Link } from 'react-router-dom'
interface props {
  name?: string;
  svg?: string;
  link?: string;
  target?: string
}
const SideLinks = ({ name, svg, link, target }: props) => {
  return (
    <div className="px-2 mt-3">
      <Link
        to={link ? link : "/"}
        target={target}
        className="todesktop:py-[7px] text-default group flex items-center rounded-md px-8 py-3 font-medium transition [&amp;[aria-current='page']]:bg-emphasis [&amp;[aria-current='page']]:text-emphasis mt-0.5 text-sm hover:bg-subtle todesktop:[&amp;[aria-current='page']]:bg-emphasis hover:bg-input hover:bg-opacity-40 hover:text-emphasis "
      >
        <div dangerouslySetInnerHTML={{ __html: svg ? svg : "" }} />
        <span className="hidden ml-3 w-full justify-between text-[19px] lg:flex">
          <div className="flex text-mainText">{name}</div>
        </span>
      </Link>
    </div>

  )
}

export default SideLinks
