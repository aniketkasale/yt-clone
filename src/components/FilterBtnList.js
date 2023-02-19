import React from "react";
import { MdOutlineExplore } from "react-icons/md";

const FilterBtnList = () => {
  const list = ["All", "Gaming", "Music", "Live", "Javascript"];
  const mdList = [
    "Jukebox",
    "Comedy",
    "Laptops",
    "Lectures",
    "Computer programming",
    "Gadgets",
    "Recently uploaded",
    "New to you",
    "Watched",
    "Mixes",
  ];
  return (
    <div>
      <div className="flex items-center border-b-4 md:border-none md:justify-center">
        <button className="flex items-center bg-gray-100 p-1 m-1 rounded-lg">
          <MdOutlineExplore /> Explore
        </button>
        <span className="border-r-gray-200 border-r-2 h-6"></span>
        {list.map((btn, i) => {
          return (
            <button key={i} className="bg-gray-100 p-1 m-1 rounded-lg">
              {btn}
            </button>
          );
        })}
        {mdList.map((btn, i) => {
          return (
            <button
              key={i}
              className="bg-gray-100 p-1 m-1 rounded-lg hidden md:block"
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBtnList;
