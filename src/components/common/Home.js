import React from "react";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import VideoDetail from "../VideoDetail";
export default function Home({
  selectedVideo,
  videos,
  handleSelectedVideo,
  handleSearchSubmit,
}) {
  return (
    <main>
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      <VideoList handleSelectedVideo={handleSelectedVideo} videos={videos} />
      <VideoDetail video={selectedVideo} />
    </main>
  );
}
