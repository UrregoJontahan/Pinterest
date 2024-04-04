import React, { useContext, useEffect, useState } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";
import loading from "../assets/loading.jpg"
import useObserver from "../UseObserver";

export function ListImages() {
    const { filteredImages } = useContext(DataContext)
    const [showConfeti, setShowConfeti] = useState(false);
    const [isLoading, setLoadingState] = useState("hidden")

    const handleLikeClick = () => {
        setShowConfeti(true);
        setTimeout(() => {
            setShowConfeti(false);
        }, 1000); 
    };

    const [observer, setElements, entries] = useObserver({
      threshold:0.25,
      root:null
    });

    useEffect(()=>{
      const images = document.querySelectorAll(".image-container");
      setElements(images)
    },[setElements]);

    useEffect(()=>{
      entries.forEach(entry=> {
        if(entry.isIntersecting){
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.getAttribute('data-src');
          lazyImage.classLIst.remove("img-ramdom");
          observer.unobserve(lazyImage) 
        }
      });
    },[entries,observer])

  return (
    <div className="father-counter-images">
      <div className="counter-images">
        <div className="images">
          {filteredImages.map(({ image, _id }) => (
            <div key={_id + Date.now() + Math.random()} className="image-container" >
                <Link to={`/page-pin/${_id}`}>
                {isLoading && <div className="loader"/>}
                  <img 
                    // loading="lazy" 
                    // decoding="async"
                    className={`img-ramdom ${isLoading && "loading-opacity"}`}
                    onLoad={()=> setLoadingState("")}
                    src={loading} 
                    data-src={image}
                    key={image}
                  />
                </Link>
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