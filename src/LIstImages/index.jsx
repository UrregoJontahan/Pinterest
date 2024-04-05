import React, { useContext, useEffect, useState, useRef } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";

export function ListImages() {
    const { filteredImages } = useContext(DataContext);
    const [showConfeti, setShowConfeti] = useState(false);
    const containerRef = useRef(null);

    const handleLikeClick = () => {
        setShowConfeti(true);
        setTimeout(() => {
            setShowConfeti(false);
        }, 1000);
    };

    return (
        <div className="father-counter-images">
            <div className="counter-images" ref={containerRef}>
                    <div className="images">
                        {filteredImages.map(({ image, _id }) => (
                            <div key={_id + Date.now() + Math.random()} className="image-container">
                                <Link to={`/page-pin/${_id}`}>
                                    <LazyImage src={image}/>
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


function LazyImage({src}){
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(imageRef.current);
      }
    }, {threshold: 0.8});

    observer.observe(imageRef.current);


    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return <img 
  className={`img-ramdom`}
    ref={imageRef} src={isVisible ? src : ""}  />;
}