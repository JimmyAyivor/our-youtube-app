
import React from "react";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import VideoDetail from "../VideoDetail";
import { useState } from 'react';
import Modal from '../Modal'


export default function Home({
  selectedVideo,
  videos,
  handleSelectedVideo,
  handleSearchSubmit,
  
  
}) {

  const [show, setShow] = useState(false);

  const showErrorModal = (() => {
    setShow(true)
  })


  return (
    <main>
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      <VideoList
        handleSelectedVideo={handleSelectedVideo}
        videos={videos}
        showErrorModal={showErrorModal}
        setShow={setShow}
        show={show}
      />
      
      <div className="App">
        <button onClick={() => setShow(true)}>Show Error</button>
        <Modal title="Error" onClose={() => setShow(false)} show={show}>
          <p>Something went wrong</p>
        </Modal>
      </div>
    </main>
  );

}
