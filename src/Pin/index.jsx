import React, { useContext, useEffect, useState } from "react";
import "./pin.css";
import { ButtonBack } from "../ButtonBack";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Provider";
import { ApiId } from "../API";

export function Pin() {
  const { images } = useContext(DataContext);
  const { id: currentId } = useParams(); 
  const navigate = useNavigate(); 
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchApi(currentId); 
  }, [currentId]); 

  const fetchApi = async (id) => {
      const result = await ApiId(id);
      setSelectedImage(result);
  };

  const handleImageClick = (id) => {
    window.location.reload(navigate(`/page-pin/${id}`))
  };

  return (
    <div className="container-images-selecte-suggestions">
      <div className="page-pin">
        <ButtonBack />
        <div className="details-image">
          {selectedImage && selectedImage.image && (
            <img
              className="image-selected"
              src={selectedImage.image}
              alt="Selected Image"
            />
          )}
          <div className="box-comments">
            <div className="btn-save-image-selected"> Guardar</div>
          </div>
        </div>
      </div>
      <div className="suggestion-images">
        <div className="image-columns">
          {images.map((image) => (
            <div key={image._id} className="image-container">
              <img
                src={image.image}
                className="img-ramdom"
                onClick={() => handleImageClick(image._id)}
              />
              <button className="btn-save-image">Guardar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

