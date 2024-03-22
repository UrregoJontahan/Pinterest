import React, { useContext, useEffect, useState } from "react";
import "./pin.css";
import { ButtonHomePage } from "../ButtonHomePage";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { getImageById } from "../API";

export function Pin() {
  const {related ,filtered}  = useContext(DataContext);
  const { id: currentId } = useParams(); 
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchApi(currentId); 
    scrollTo(0,0)
  }, [currentId]); 

  const fetchApi = async (id) => {
      const result = await getImageById(id);
      setSelectedImage(result);
  };

  return (
    <div className="container-images-selecte-suggestions">
      <div className="page-pin">
        <ButtonHomePage />
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
        {related(selectedImage?.category, selectedImage?.tags.join(" ")).map(({image, _id}) => (
            <Link 
              to={`/page-pin/${_id}`}
              key={_id}  className="image-container">
              <img
                src={image}
                className="img-ramdom"
              />
              <button className="btn-save-image">Guardar</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

