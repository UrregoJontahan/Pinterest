import React, { useContext, useEffect, useState } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";
import loading from "../assets/loading.jpg"

export function ListImages() {
    const { filteredImages } = useContext(DataContext)
    const [showConfeti, setShowConfeti] = useState(false);

    const handleLikeClick = () => {
        setShowConfeti(true);
        setTimeout(() => {
            setShowConfeti(false);
        }, 1000); 
    };

  return (
    <div className="father-counter-images">
      <div className="counter-images">
        <div className="images">
          {filteredImages.map(({ image, _id }) => (
            <div key={_id + Date.now() + Math.random()} className="image-container" >
                <LazyImage src={image} />
              <button className="btn-save-image" onClick={handleLikeClick}>
                <FaHeart className="icon-heart" />
                   {showConfeti && <Confeti />}
              </button>
            </div>
          ))}
        </div>
      </div>         
    </div>
  );
}


function LazyImage({src}) {
  
  const [isLoading, setLoadingState] = useState("hidden")

  return (
    <div style={{position: 'relative'}}>
      {isLoading && <div className="loader" />}
      <img 
        loading="lazy" 
        decoding="async"
        className={`img-ramdom ${isLoading && "loading-opacity"}`}
        onLoad={()=> setLoadingState("")}
        src={src} 
      />
    </div>
  )
} 
