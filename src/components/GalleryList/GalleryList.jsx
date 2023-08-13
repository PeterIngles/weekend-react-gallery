import React from 'react';
import GalleryItem from '../GalleryList/GalleryItem'

function GalleryList({imageGallery}) {
    return (<>
        {imageGallery.map(image => (<GalleryItem key={image.id} imageProp={image}/>)
        )}
   </> );
    
}

export default GalleryList
