import React from 'react';
import GalleryItem from '../GalleryList/GalleryItem'
import "./GalleryList.css"

function GalleryList({ imageGallery }) {
    return (<>
        <div className="image-grid">
            {imageGallery.map(image => (<GalleryItem key={image.id} imageProp={image} />)
            )}
    </div>

   </> );

}

export default GalleryList
