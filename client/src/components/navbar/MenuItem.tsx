import { NavLink } from "react-router-dom"

interface MenuItemProps{
  name:string;
  href:string;

}

const MenuItem = ({href, name}:MenuItemProps) => {
  return (
    <div>
    <NavLink to={href} className="flex flex-col items-center gap-1">
          <p>{name}</p>
          <hr className="border-none h-0.5 bg-blue-600 w-full hidden" />
      </NavLink>
    </div>
  )
}

export default MenuItem