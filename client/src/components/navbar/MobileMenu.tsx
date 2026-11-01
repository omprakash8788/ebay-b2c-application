import { NavLink } from "react-router-dom";

interface MobileMenuProps{
    href:string;
    onClick:()=>void;
    icon:React.ReactNode;
    name:string;
}

const MobileMenu = ({ href, onClick, icon, name }:MobileMenuProps) => {
  return (
    <div>
      <NavLink
        to={href}
        onClick={onClick}
        className="py-2 pl-3 flex items-center gap-3  border-b border-b-blue-100"
      >
        {icon}
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

export default MobileMenu;
