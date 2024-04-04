import React, { useContext, useEffect, useState } from "react";
import "./pin.css";
import { ButtonHomePage } from "../ButtonHomePage";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { getImageById } from "../API";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loading from "../assets/loading.jpg"
import "react-lazy-load-image-component/src/effects/blur.css"

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

  const addImagesFromCategories = (categories) => {
    categories.forEach((category) => {
      if (categoriesMap.has(category)) {
        const images = categoriesMap.get(category);
        images.forEach((image) => uniqueImagesSet.add(image));
      }
    });
  };
  
  const addImagesFromTags = (tags) => {
    tags.forEach((tag) => {
      if (categoriesMap.has(tag)) {
        const images = categoriesMap.get(tag);
        images.forEach((image) => uniqueImagesSet.add(image));
      }
    });
  };
  
  const addRemainingImages = () => { 
    categoriesMap.forEach((images) => {
      images.forEach((image) => {
        if (!uniqueImagesSet.has(image)) {
          uniqueImagesSet.add(image);
        }
      });
    });
  };
  
  const findUniqueImages = () => {
    if (selectedImage && selectedImage.category) {
      addImagesFromCategories(selectedImage.category.split(','));
    } else {
      const tagsImages = selectedImage?.tags.split(',');
      if (tagsImages) {
        addImagesFromTags(tagsImages);
      }
    }
    addRemainingImages();
  };

  findUniqueImages();
  
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
              <LazyLoadImage src={image} className="img-ramdom" placeholderSrc={loading} effect="blur" threshold={0}/>
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
