import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    getImages();
  });

  const getImages = () => {
    axios
      .get('/gallery')
      .then((response) => {
        // array of gallery objects saved to state array
        setImageGallery(response.data);
      })
      .catch((error) => {
        alert(`Couldn't get imageGallery. Try again later`);
        console.log('Error getting imageGallery', error);
      });
  };

  


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList imageGallery={imageGallery}/>
    </div>
  );
}

export default App;

