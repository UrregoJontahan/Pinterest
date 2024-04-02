import React, { useContext, useEffect, useState } from "react";
import "./pin.css";
import { ButtonHomePage } from "../ButtonHomePage";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { getImageById } from "../API";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";

export function Pin() {
  const { categoriesMap }  = useContext(DataContext);
  const { id: currentId } = useParams(); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [showConfeti, setShowConfeti] = useState(false);

  const handleLikeClick = () => {
      setShowConfeti(true);
      setTimeout(() => {
          setShowConfeti(false);
      }, 1000); 
  };  

  useEffect(() => {
    fetchApi(currentId); 
    scrollTo(0,0)
  }, [currentId]); 

  const fetchApi = async (id) => {
      const result = await getImageById(id);
      setSelectedImage(result);
  };

const uniqueImagesSet = new Set();

if (selectedImage && selectedImage.category) {
  const selectedCategories = selectedImage.category.split(',');

  for (const category of selectedCategories) {
    if (categoriesMap.has(category)) {
      const images = categoriesMap.get(category);
      for (const image of images) {
        uniqueImagesSet.add(image);
      }
    }
  }
} else {
  const tagsImages = selectedImage?.tags.split(',');
  if (tagsImages) {
    for (const tag of tagsImages) {
      if (categoriesMap.has(tag)) {
        const images = categoriesMap.get(tag); 
        for (const image of images) {
          uniqueImagesSet.add(image);
        }
      }
    }
  }
}

for (const [, images] of categoriesMap) {
  for (const image of images) {
    if (!uniqueImagesSet.has(image)) {
      uniqueImagesSet.add(image);
    }
  }
}

const uniqueImages = Array.from(uniqueImagesSet);

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
            <div className="btn-save-image-selected" onClick={handleLikeClick}> Guardar
              {showConfeti && <Confeti/>}
            </div>
          </div>
        </div>
      </div>
      <div className="suggestion-images">
        <div className="image-columns">
          {uniqueImages.map(({ image, _id }) => (
            <div key={_id} className="image-container">
              <Link to={`/page-pin/${_id}`}>
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