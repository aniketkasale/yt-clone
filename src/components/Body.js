import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FilterBtnList from "./FilterBtnList";
import SideBar from "./SideBar";

const Body = () => {
  const showFilterList = useSelector((store) => store.nav.showFilterList);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        {showFilterList && <FilterBtnList />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
