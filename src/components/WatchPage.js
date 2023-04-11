import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, hideFilterList } from "../utils/navSlice";
import VideoPreview from "./VideoPreview";
import LiveChat from "./LiveChat";

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
      <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
        <p className="border-b p-2">Live Chat</p>
        <div className="bg-gray-50">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
