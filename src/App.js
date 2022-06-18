import React, { useEffect, useState } from "react";
import "./App.css";
import { getYoutubeVideos } from "./apis/youtube";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import Comments from "./components/Comments/Comments";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSearchSubmit = (searchTerm) => {
    getYoutubeVideos(searchTerm)
      .then((data) => setVideos(data.items))

      .catch((error) => {
        console.error("Erro---->", error);
      });

    console.log("this is resp", videos);
    console.log("this is Search", searchTerm);
  };
  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
  };

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        setVideos(myJson.items);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <Nav />
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList handleSelectedVideo={handleSelectedVideo} videos={videos} />
      <Comments />
    </div>
  );
}

export default App;
