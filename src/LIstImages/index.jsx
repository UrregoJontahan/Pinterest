import React, { useContext } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { DataContext } from "../Provider";

export function ListImages() {
    const {filtered} = useContext(DataContext)

  if (!filtered) {
    return <div>Cargando...</div>;
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
              <button className="btn-save-image">
                <FaRegHeart className="icon-heart" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
