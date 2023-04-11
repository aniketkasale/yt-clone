import moment from "moment";
import React, { useState } from "react";
import { kFormatter } from "../utils/constants";

const VideoInfoComponent = ({ info }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { snippet, statistics } = info;
  const { channelTitle, title, description, publishedAt } = snippet;

  return (
    <div className="md:mt-2 m-2">
      <h2 className="md:text-lg font-sans text-sm font-semibold">{title}</h2>
      <div className="flex items-center">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-5 md:p-7 h-2"></div>
        <div className="ml-2">
          <h2 className="font-semibold text-sm md:text-base">{channelTitle}</h2>
          <p className="text-gray-500 text-sm">xx subscribers</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg p-2 mt-2">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
            {kFormatter(statistics.viewCount)} views &nbsp;
            {moment(publishedAt).fromNow()}
          </p>
          <p className="text-sm md:text-base">
            {showDesc ? description : description.substring(0, 200) + "..."}
            {showDesc ? (
              <>
                <br /> <br />
              </>
            ) : (
              <></>
            )}
            <button
              className="font-semibold"
              onClick={() => setShowDesc(!showDesc)}
            >
              Show {showDesc ? "less" : "more"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
