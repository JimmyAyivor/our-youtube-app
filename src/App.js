/** @format */

import React, { useEffect } from 'react';
import './App.css';
import youtube, { getYoutubeVideos } from './apis/youtube';
import Nav from './components/Nav';
import VideoItem from './components/VideoItem';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

export const App = () => {
	return <VideoItem videoId={getYoutubeVideos} />;
};

// function App() {
//   // useEffect(() => {
//   //   getYoutubeVideos();
//   // }, []);

//   return (

//     <div className='App'>
//       {/* <Nav />
//       <SearchBar />
//       <VideoDetail />
//       <VideoList /> */}
//     </div>
//   );
// }

export default App;
