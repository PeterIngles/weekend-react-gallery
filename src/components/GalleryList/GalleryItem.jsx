function GalleryItem({imageProp}) {
    return (
        <img src={`${imageProp.path}`} alt={`${imageProp.description}`}  />
)}

export default GalleryItem