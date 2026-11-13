import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { assets } from "../assets/assets";
import { setSearch, setShowSearch } from "../features/shop/shopSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.shop.search);
  const showSearch = useAppSelector((state) => state.shop.showSearch);

  const location = useLocation();

  const visible = location.pathname.includes("collection");

  return showSearch && visible ? (
    <div className="border-b border-gray-300 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search..."
        />
        <img className="w-4" src={assets.search_icon} alt="sicon" />
      </div>
      <img
        onClick={() => dispatch(setShowSearch(false))}
        src={assets.cross_icon}
        alt="icon"
        className="w-3 inline cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
