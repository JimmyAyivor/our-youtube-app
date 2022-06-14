import React from 'react';
import logo from './logo.svg';
import './App.css';
import youtube from './apis/youtube';
import { Nav } from './components/Nav';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchBar/>
      <VideoDetail/>
      <VideoList/>
    </div>
  );
}

export default App;
