import React, { createContext,useEffect,useState } from "react";
import { getImagesfromApi } from "../API";

const DataContext = createContext()

function Provider( {children} ){
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState();
    const [searchImages, setSearchImages] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await getImagesfromApi();
        setImages(data);
    };

    const handleSearchChange = (searchimg) => {
        setSearchImages(searchimg);
      };

      const filtered = images.filter(({ title, category, tags }) =>
      title.toLowerCase().includes(searchImages.toLowerCase()) ||
      category.toLowerCase().includes(searchImages.toLowerCase()) ||
      tags.some(tag => tag.toLowerCase().includes(searchImages.toLowerCase()))
  );


  const related = (selectedCategory, selectedTags) => {
    if (!selectedCategory && !selectedTags) {
      return [];
    }
  
    const selectedCategoryArray = selectedCategory ? selectedCategory.split(" ") : [];
    const selectedTagsArray = selectedTags ? selectedTags.split(" ") : [];
    
    return images.filter(image=> {
      const imageCategoryArray = image.category.split(" ");
      const imageTagsArray = image.tags.map(tag => tag.toLowerCase());
      return (
        selectedCategoryArray.some(category => imageCategoryArray.includes(category.toLowerCase())) &&
        selectedTagsArray.some(tag => imageTagsArray.includes(tag.toLowerCase()))  
        
      );
    });
};

    return(
        <DataContext.Provider value={{images, selectedImage , setSelectedImage, handleSearchChange, filtered, related}}>
            {children}
        </DataContext.Provider>
    )
}

export {Provider, DataContext}