import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import useTriggerOutsideClick from "../utils/useTriggerOutsideClick";

const SearchBar = ({
  setShowSearchBar,
  showSearchBar,
  setSearchQuery,
  searchSuggestions,
}) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);
  useTriggerOutsideClick(wrapperRef, () => {
    setIsSearchBoxOpen(false);
  });
  return (
    <div className="my-2">
      <div className="flex items-center shadow-lg md:shadow-none">
        <BiArrowBack
          className="ml-1 md:hidden"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchBoxOpen(true);
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setIsSearchBoxOpen(true);
          }}
          value={query}
          placeholder="Search"
          className="bg-gray-100 outline-blue-400 rounded-full p-1 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
        />
        <button className="hidden md:bg-gray-100 md:block p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
          <CiSearch />
        </button>
      </div>
      {isSearchBoxOpen && searchSuggestions.length > 0 && (
        <div
          ref={wrapperRef}
          className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm"
        >
          <ul>
            {searchSuggestions.map((item, i) => {
              return (
                <Link
                  key={i}
                  to={"results/?search_query=" + item}
                  onClick={() => {
                    setIsSearchBoxOpen(false);
                    setQuery(item);
                  }}
                >
                  <li
                    key={i}
                    className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                    onClick={() => {}}
                  >
                    <AiOutlineSearch /> {item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
