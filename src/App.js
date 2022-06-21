/** @format */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { getYoutubeVideos } from './apis/youtube';
import Nav from './components/Nav';
import Home from './components/common/Home';
import About from './components/common/About';




function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	

	const handleSearchSubmit = (searchTerm) => {
		getYoutubeVideos(searchTerm)
			.then((data) => setVideos(data.items))

			.catch((error) => {
				
				console.log(error)
			});
	};
	const handleSelectedVideo = (video) => {
		setSelectedVideo(video);
	};

	const getData = () => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
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
    <div className="container">
      <Router>
        
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                handleSearchSubmit={handleSearchSubmit}
                handleSelectedVideo={handleSelectedVideo}
                videos={videos}
                
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
