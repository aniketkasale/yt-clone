import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/navSlice";
import SearchBar from "./SearchBar";
const Header = () => {
  const dispatch = useDispatch();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div>
      {!showSearchBar && (
        <div className="flex md:grid-flow-col md:grid justify-between items-center border-b-2 shadow-sm md:shadow-none md:border-none">
          <div className="flex items-center md:col-span-3">
            <button onClick={() => toggleMenuHandler()}>
              <AiOutlineMenu className="hidden md:block mx-4 text-xl cursor-pointer" />
            </button>
            {/* <Link to={"/"}> */}
            <img
              className="w-10 cursor-pointer"
              src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
              alt="Youtube Logo"
            />
            <b className="cursor-pointer">MyYouTube</b>
            {/* </Link> */}
          </div>
          <div className="hidden md:block col-span-8">
            <SearchBar
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
            />
          </div>
          <div className="flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <AiOutlineSearch
              className="md:hidden"
              onClick={() => {
                setShowSearchBar(!showSearchBar);
              }}
            />
            <BiUserCircle className="md:text-4xl " />
          </div>
        </div>
      )}
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      )}
    </div>
  );
};

export default Header;
