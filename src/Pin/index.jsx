import React, { useContext, useEffect, useState } from "react";
import "./pin.css";
import { ButtonHomePage } from "../ButtonHomePage";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { getImageById } from "../API";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";

export function Pin() {
  const { images}  = useContext(DataContext);
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

  let newArrayCategories = [];
  let newArrayTags = [];
  let imagesWithMatches = [];
  let imagesThatNotMatch = []
  
  images.map((image) => {
    const categoryArray = image?.category;
    const tagsArray = image?.tags;
    newArrayCategories.push(categoryArray);
    newArrayTags.push(tagsArray)
    
    const categoryOfImageSelected = selectedImage?.category.split(",");
    const tagsOfImagesSelected = selectedImage?.tags;
    
    if ( categoryOfImageSelected && categoryArray.split(",").some(category=> categoryOfImageSelected.includes(category))) {
      imagesWithMatches.push(image);
    } else {
      imagesThatNotMatch.push(image)
    }
    
    if (tagsOfImagesSelected && tagsArray.some(tags => tagsOfImagesSelected.includes(tags))){
      imagesWithMatches.push(image)
    } else {
      imagesThatNotMatch.push(image)
    }
  });
  
  let concatenatedImages=[...imagesWithMatches, ...imagesThatNotMatch]

  let imagesUniques =  concatenatedImages.filter((value, index, self)=>{
    return self.indexOf(value) === index

    })
    
  let allImages= imagesUniques
  
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
        {allImages.map(({image, _id}) => (
            <div className="image-container">
              <Link 
              to={`/page-pin/${_id}`}
              key={_id}  >
              <img
                src={image}
                className="img-ramdom"
              />
            </Link>
              <button className="btn-save-image" onClick={handleLikeClick}>
              <FaHeart className="icon-heart" />
                {showConfeti && <Confeti/>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

