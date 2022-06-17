import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import  Home  from "./components/common/Home"
import About from "./components/common/About"
import  { getYoutubeVideos } from "./apis/youtube";
import Nav  from "./components/Nav";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";




const App = () => {
  return (
    <div>
        <Nav />
      <Router>
        <Routes>
          <Route  path="/about" element={<About />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}



export default App;
