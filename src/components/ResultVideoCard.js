import React from "react";
import { RxDotFilled } from "react-icons/rx";
import moment from "moment/moment";
import { kFormatter } from "../utils/constants";
const ResultVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;
  return (
    <div className="space-y-2 mb-2 md:h-52 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg">
      <img
        src={thumbnails.medium.url}
        alt="thubnail"
        className="rounded-xl md:w-fit w-full"
      />
      <div className="flex flex-col px-2 md:gap-5">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex items-center text-xs font-semibold text-gray-500">
          <p>{channelTitle}</p> <RxDotFilled />
          {/* <p>{kFormatter(statistics.viewCount)} views</p> <RxDotFilled /> */}
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ResultVideoCard;
