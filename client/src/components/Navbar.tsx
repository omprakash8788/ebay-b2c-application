import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import MenuItem from "./navbar/MenuItem";
import Logo from "./navbar/Logo";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileMenuItems = [
    { name: "Home", href: "/", icon: <FaHome className="w-5 h-5" /> },
    {
      name: "Collection",
      href: "/collection",
      icon: <BsFillCollectionFill className="w-5 h-5" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <MdInfoOutline className="w-5 h-5 text-black" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <RiContactsBook3Fill className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <div className="flex border-b border-gray-200 justify-between items-center py-5 font-medium">
      <Logo />
      <ul className="sm:flex hidden gap-5 text-[16px] text-black">
        {navItems.map((item) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </ul>
      {/* search icon */}
      <div className="flex items-center gap-6">
        <ImSearch className="w-5 h-5 cursor-pointer" />
        <div className="group relative">
          <FaRegUserCircle className="w-5 h-5 cursor-pointer border-r-red-500 border-l-yellow-500 border-t-green-500 border-b-blue-500 border rounded-full" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-blue-100/30 text-black rounded">
              <p className="cursor-pointer hover:text-blue-400">My Profile</p>
              <p className="cursor-pointer hover:text-blue-400 ">Orders</p>
              <p className="cursor-pointer hover:text-blue-400">Logout</p>
            </div>
          </div>
        </div>
        {/* link tag */}
        <Link to="/cart" className="relative">
          <FaCartPlus className="w-5 h-5 min-w-5 h-min-5" />
          <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 border-r-red-500 border-l-yellow-500 border-t-green-500 border-b-blue-500 border bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <IoMdMenu
          onClick={() => setVisible(true)}
          className="w-5 h-5 cursor-pointer sm:hidden"
        />
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between bg-blue-100 items-center gap-4 p-3 cursor-pointer">
              <IoMdArrowDropdownCircle className="w-5 h-5 rotate-180" />
              <IoClose className="w-5 h-5" onClick={() => setVisible(false)} />
            </div>
            {mobileMenuItems.map((item) => (
              <MobileMenu
                key={item.href}
                href={item.href}
                onClick={() => setVisible(false)}
                icon={item.icon}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
