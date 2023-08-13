import React, { useState, useEffect } from "react";
import axios from "axios";

function GalleryItem({ imageProp }) {
  const [likeCount, setLikeCount] = useState(imageProp.likes); // Initialize likeCount with 0

  useEffect(() => {
    axios
      .get(`/gallery/likes/${imageProp.id}`) // Replace with the appropriate API endpoint
      .then((response) => {
        setLikeCount(response.data.likes); // Set the initial likeCount based on the server response
      })
      .catch((error) => {
        console.log("Error fetching likeCount:", error);
      });
  }, []);

  const [descriptionStatus, setDescriptionStatus] = useState(false);

  function showDescription() {
    console.log("CLICKED ON IMAGE", descriptionStatus);
    setDescriptionStatus(!descriptionStatus);
  }

  const clickLike = () => {
    setLikeCount(likeCount + 1); // Increment likeCount on button click
  };

  useEffect(() => {
    console.log("Like count changed:", likeCount);

    axios
      .put(`/gallery/like/${imageProp.id}`, { likes: likeCount })
      .then((response) => {
        console.log("Response from PUT:", response);
      })
      .catch((error) => {
        console.log("Error on PUT:", error);
      });
  }, [likeCount]);

  if (descriptionStatus === true) {
    return (
      <>
        <div className="image-item">
          <p onClick={showDescription}>{imageProp.description}</p>
          <button onClick={clickLike}>LIKE 👍</button>
          <p>LIKES: {likeCount}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="image-item">
        <img
          onClick={showDescription}
          src={`${imageProp.path}`}
          alt={`${imageProp.description}`}
        />
        <button onClick={clickLike}>LIKE 👍</button>
        <p>LIKES: {likeCount}</p>
      </div>
    </>
  );
}

export default GalleryItem;
