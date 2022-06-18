import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import  Home  from "./components/common/Home"
import About from "./components/common/About"
import Nav  from "./components/Nav";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";




const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  )
}



export default App;
