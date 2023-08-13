import { useState } from "react"



function GalleryItem({imageProp}) {

    const [descriptionStatus, setDescriptionStatus] = useState(false);

    function showDescription(){
        console.log("CLICKED ON IMAGE", descriptionStatus)
        setDescriptionStatus(!descriptionStatus)
    }

    if(descriptionStatus == true){
        return <p onClick={() => showDescription()}>{imageProp.description}</p>
    }

    return (
        <img onClick={() => showDescription()} src={`${imageProp.path}`} alt={`${imageProp.description}`}  />
)}

export default GalleryItem