import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleSelectedVideo, showErrorModal }) => {
  if (!videos) {
    return showErrorModal();
  } else {
    const renderedVideos = videos.map((video) => {
      const id = video.id.videoId;
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
