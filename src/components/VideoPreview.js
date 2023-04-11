import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import VideoInfoComponent from "./VideoInfoComponent";
import VideoPreviewShimmer from "./VideoPreviewShimmer";
import Comments from "./Comments";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API + videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  };
  if (video.length === 0) return <VideoPreviewShimmer />;
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[30rem] h-60 w-full rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <VideoInfoComponent info={video} />
      </div>
      <Comments videoId={videoId} />
    </div>
  );
};

export default VideoPreview;
