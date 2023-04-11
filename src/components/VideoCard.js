import React from "react";
import { RxDotFilled } from "react-icons/rx";
import moment from "moment/moment";
import { kFormatter } from "../utils/constants";
const VideoCard = ({ info, filter }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg">
      <img
        src={thumbnails?.medium?.url}
        alt="thubnail"
        className="rounded-xl w-full"
      />
      <div className="flex flex-col px-2">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex items-center text-xs font-semibold text-gray-500">
          <p>{channelTitle}</p> <RxDotFilled />
          {filter === null && (
            <>
              <p>{kFormatter(statistics?.viewCount)} views</p> <RxDotFilled />
            </>
          )}
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
