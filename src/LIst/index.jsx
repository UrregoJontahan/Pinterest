import React, { useContext } from "react";
import "./listImages.css";
import { DataContext } from "../Provider";
import { Link } from "react-router-dom";

export function ListImages( {showDetails} ) {
    const {images, setSelectedImage} = useContext(DataContext)

    const handleClickImage = (image) =>{
        showDetails(image)
        setSelectedImage(image)
    }
    
    return (
        <div className="father-counter-images">
            <div className="counter-images">
                <div className="images">
                    {images.map((image) => (
                        <div key={image._id} className="image-container">
                                <Link to={`page-pin/${image._id}`} key={image._id}>
                                <img src={image.image} className="img-ramdom" onClick={()=>handleClickImage(image)}/>
                            </Link>
                            <button className="btn-save-image">Guardar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
