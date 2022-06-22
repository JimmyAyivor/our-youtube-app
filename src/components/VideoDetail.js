import React from "react";
import Comments from "./Comments/Comments";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

const VideoDetail = ({ selectedVideo }) => {
  let params = useParams();
  const { id } = params;

  const opts = {
    height: "490",
    width: "740",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='video-detail'>
      <YouTube videoId={id} opts={opts} />
      <div className='video-title'>
        <h2>{selectedVideo.snippet.title}</h2>
        <p>{selectedVideo.snippet.description}</p>
      </div>
      <Comments />
    </div>
  );
};

export default VideoDetail;
