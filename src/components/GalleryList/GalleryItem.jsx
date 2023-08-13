import { useState } from "react"

function GalleryItem({ imageProp }) {

    const [likeCount, setLikeCount] = useState(0)
    const [descriptionStatus, setDescriptionStatus] = useState(false);

    function showDescription() {
        console.log("CLICKED ON IMAGE", descriptionStatus)
        setDescriptionStatus(!descriptionStatus)
    }

    function clickLike(){
        setLikeCount(likeCount + 1)
    }

    if (descriptionStatus == true) {
        return (
            <>
                <div className='image-item'>
                    <p onClick={() => showDescription()}>{imageProp.description}</p>
                    <button onClick={() => clickLike()}>LIKE 👍</button>
                    <p>LIKES:{likeCount}</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='image-item'>
                <img onClick={() => showDescription()} src={`${imageProp.path}`} alt={`${imageProp.description}`} />
                <button onClick={() => clickLike()}>LIKE 👍</button>
                <p>LIKES:{likeCount}</p>
            </div>
        </>
    )
}

export default GalleryItem