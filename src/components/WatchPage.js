import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, hideFilterList } from "../utils/navSlice";
import VideoPreview from "./VideoPreview";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(hideFilterList());
  }, []);

  return (
    <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4">
      <VideoPreview videoId={videoId} />
      <div className="w-1/4 bg-gray-100 rounded-xl">live chat</div>
    </div>
  );
};

export default WatchPage;
