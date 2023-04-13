import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API, YOUTUBE_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import VideoCard from "./VideoCard";

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  useEffect(() => {
    getVideos();
  }, [searchParams, filter]);

  const getVideos = async () => {
    const data = await fetch(
      filter === null ? YOUTUBE_API : SEARCH_RESULT_API + filter
    );
    const json = await data.json();
    const onlyVideos = json.items.filter((video) => {
      if (filter === null) {
        return video.kind === "youtube#video";
      } else {
        return video.id.kind === "youtube#video";
      }
    });
    setVideos(onlyVideos);
  };
  if (videos !== undefined && videos.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="md:flex md:flex-wrap md:justify-center">
      {videos !== undefined ? (
        videos.map((video) => {
          const videoId = filter === null || "" ? video.id : video.id.videoId;
          return (
            <Link key={videoId} to={"/watch?v=" + videoId}>
              <VideoCard key={video.id} info={video} filter={filter} />
            </Link>
          );
        })
      ) : (
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          Oops! looks like we have exceeded youtube API quota
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;
