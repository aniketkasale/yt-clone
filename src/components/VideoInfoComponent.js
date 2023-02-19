import moment from "moment";
import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { kFormatter } from "../utils/constants";

const VideoInfoComponent = ({ info }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { snippet, statistics } = info;
  const { channelTitle, title, description, publishedAt } = snippet;

  return (
    <div className="mt-2">
      <h2 className="text-lg font-sans font-semibold">{title}</h2>
      <div className="flex items-center">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-7 h-2"></div>
        <div className="ml-2">
          <h2 className="font-semibold">{channelTitle}</h2>
          <p className="text-gray-500">xx subscribers</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg p-2 mt-2">
        <div className="flex flex-col">
          <p className="font-semibold">
            {kFormatter(statistics.viewCount)} views &nbsp;
            {moment(publishedAt).fromNow()}
          </p>
          <p>
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
