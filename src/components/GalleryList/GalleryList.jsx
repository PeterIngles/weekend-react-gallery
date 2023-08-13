import React from 'react';

function GalleryList({imageGallery}) {
    return (<>
        {imageGallery.map(image => <img key={image.id} src={`${image.path}`} alt="gallery" />
        )}
    </>);
}

export default GalleryList