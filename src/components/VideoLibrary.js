import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import VideoCard from "./VideoCard";

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (videos.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="md:flex md:flex-wrap md:justify-center">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoLibrary;
