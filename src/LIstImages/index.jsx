import React, { useContext, useState } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";

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
            <div key={image._id} className="image-container" >
              <Link to={`page-pin/${_id}`}>
                <img src={image} className="img-ramdom" />
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
