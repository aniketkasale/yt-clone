import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API } from "../utils/constants";
import ResultVideoCard from "./ResultVideoCard";
import ResultShimmer from "./ResultsPageShimmer";

const Results = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  useEffect(() => {
    getVideos();
  }, [search_query]);

  const getVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + search_query);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  if (videos.length === 0) {
    return <ResultShimmer />;
  }

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
            <ResultVideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Results;
