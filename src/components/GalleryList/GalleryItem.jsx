import React, { useState, useEffect } from "react";
import axios from "axios";

function GalleryItem({ imageProp }) {
  const [likeCount, setLikeCount] = useState(imageProp.likes);
  const [descriptionStatus, setDescriptionStatus] = useState(false);

  useEffect(() => {
    console.log("Like count changed:", likeCount);
  }, [likeCount]);


  function showDescription() {
    setDescriptionStatus(!descriptionStatus);
  }

  const clickLike = () => {
    axios
      .put(`/gallery/like/${imageProp.id}`)
      .then((response) => {
        console.log("Response", response)
        console.log("Current likeCount:", likeCount); // Log current likeCount state
        setLikeCount(imageProp.likes); // Update likeCount based on the server response
        console.log("Updated likeCount:", likeCount); // Log updated likeCount state
      })
      .catch((error) => {
        console.log("Error on PUT:", error);
      });
  };

  if (descriptionStatus === true) {
    return (
      <>
        <div className="image-item">
          <p onClick={showDescription}>{imageProp.description}</p>
          <button onClick={clickLike}>LIKE 👍</button>
          <p>LIKES: {imageProp.likes}</p>
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
        <p>LIKES: {imageProp.likes}</p>
      </div>
    </>
  );
}

export default GalleryItem;
