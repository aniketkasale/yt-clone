import React from "react";
import { MdOutlineExplore } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

const FilterBtnList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["All", "HTML", "css", "Javascript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Live",
    "Laptops",
    "Music",
    "Computer programming",
    "Jukebox",
    "Recently uploaded",
    "Disney",
    "Namaste JS",
    "Mixes",
  ];
  return (
    <div>
      <div className="flex items-center border-b-4 md:border-none md:justify-center">
        <Link to={"/"}>
          <button className="flex items-center bg-gray-100 p-1 m-1 rounded-lg">
            <MdOutlineExplore /> Explore
          </button>
        </Link>
        <span className="border-r-gray-200 border-r-2 h-6"></span>
        {list.map((btn, i) => {
          const style = "p-1 m-1 rounded-lg hidden md:block";
          return (
            <Link key={i} to={"/?filter=" + btn}>
              <button
                className={
                  filter === btn
                    ? `bg-gray-800 text-gray-50 ${style}`
                    : `bg-gray-100 ${style}`
                }
              >
                {btn}
              </button>
            </Link>
          );
        })}
        {mdList.map((btn, i) => {
          const style = "p-1 m-1 rounded-lg hidden md:block";
          return (
            <Link key={i} to={"/?filter=" + btn}>
              <button
                className={
                  filter === btn
                    ? `bg-gray-800 text-gray-50 ${style}`
                    : `bg-gray-100 ${style}`
                }
              >
                {btn}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBtnList;
