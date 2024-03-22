import React, { useContext, useState } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";

export function ListImages() {
    const {filtered} = useContext(DataContext)
    const [like, setLike] = useState(false)

    const handleclickLike = () =>{
        setLike(true)
        setTimeout(()=>{
            setLike(false)
        },1500)
    }


  return (
    <div className="father-counter-images">
      <div className="counter-images">
        <div className="images">
          {filtered.map(({ image, _id }) => (
            <div key={_id} className="image-container">
              <Link to={`page-pin/${_id}`} key={_id}>
                <img src={image} className="img-ramdom" />
              </Link>
              <button className="btn-save-image" onClick={handleclickLike}>
                <FaHeart className="icon-heart" />
              </button>
            </div>
          ))}
        </div>
      </div>
          {like && (
            <div className="alert-like" onClick={() => setLike(false)}>
                <p>Te gusta esta imagen ❤️</p>
            </div>
            
            )}
    </div>
  );
}
