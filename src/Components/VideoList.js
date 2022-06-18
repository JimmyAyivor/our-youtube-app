import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleSelectedVideo }) => {
  if (!videos) {
    return (
      <div className='videos'>No Videos returned please try again later!</div>
    );
  } else {
    const renderedVideos = videos.map((video) => {
      const id = video.id.videoId;
      console.log(id);
      return (
        <>
          <VideoItem
            key={id}
            video={video}
            handleSelectedVideo={handleSelectedVideo}
          />
        </>
      );
    });

    return (
      <>
        <div className='videos'>{renderedVideos}</div>
      </>
    );
  }
};

export default VideoList;
