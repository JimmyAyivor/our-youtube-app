import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { getYoutubeVideos } from "./apis/youtube";
import Nav from "./components/Nav";
import Home from "./components/common/Home";
import About from "./components/common/About";

import VideoDetail from "./components/VideoDetail";

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchSubmit = (searchTerm, maxResults) => {
    getYoutubeVideos(searchTerm, maxResults)
      .then((data) => setVideos(data.items))

      .catch((error) => {
        props.setShow(true)
      });
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
      <Router>
        <Nav />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                handleSearchSubmit={handleSearchSubmit}
                handleSelectedVideo={handleSelectedVideo}
                videos={videos}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route
            path='/videos/:id'
            element={<VideoDetail selectedVideo={selectedVideo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
