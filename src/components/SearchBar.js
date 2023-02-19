import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setShowSearchBar, showSearchBar }) => {
  return (
    <div className="flex items-center shadow-lg md:shadow-none md:my-2">
      <BiArrowBack
        className="ml-1 md:hidden"
        onClick={() => setShowSearchBar(!showSearchBar)}
      />
      <input
        placeholder="Search"
        className="bg-gray-100 rounded-full p-1 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
      />
      <button className="hidden md:bg-gray-100 md:block p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
