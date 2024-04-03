import React, { createContext,useEffect,useState } from "react";
import { getImagesfromApi } from "../API";

const DataContext = createContext()

function Provider( {children} ){
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState();
    const [searchImages, setSearchImages] = useState("")
    const [categoriesMap, setCategoriesMap] = useState(new Map());

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await getImagesfromApi();
        setImages(data);
        buildCategoriesMap(data)
    };

    const buildCategoriesMap = (data) => {
        const newCategoriesMap = new Map();
        data.forEach((image) => {
          const categories = image.category.split(",");
          categories.forEach((category) => {
            if (newCategoriesMap.has(category)) {
              newCategoriesMap.get(category).push(image);
            } else {
              newCategoriesMap.set(category, [image]);
            }
          });
        });
        setCategoriesMap(newCategoriesMap);
      };

    const handleSearchChange = (searchimg) => {
        setSearchImages(searchimg);
      };
    
      const filteredImages = [];
      const searchImg = searchImages.toLowerCase(); 
      
      categoriesMap.forEach((images) => {
          const filteredInCategory = images.filter(({ tags }) =>
              tags.some(tag => tag.toLowerCase().includes(searchImg))
          );
      
          if (filteredInCategory.length > 0) {
              filteredImages.push(...filteredInCategory);
              return;
          }
      });
      
      if (filteredImages.length === 0) {
          categoriesMap.forEach((images) => {
              const filteredInCategory = images.filter(({ category }) =>
                  category.toLowerCase().includes(searchImg)
          );
      
      if (filteredInCategory.length > 0) {
            filteredImages.push(...filteredInCategory);
              return;
            }
        });
      }
      
      if (filteredImages.length === 0) {
          categoriesMap.forEach((images) => {
              const filteredInCategory = images.filter(({ title }) =>
                  title.toLowerCase().includes(searchImg)
              );
      
              if (filteredInCategory.length > 0) {
                  filteredImages.push(...filteredInCategory);
                  return;
              }
          });
      }
      
    return(
        <DataContext.Provider value={{images, selectedImage , setSelectedImage, handleSearchChange, filteredImages ,categoriesMap }}>
            {children}
        </DataContext.Provider>
    )
}

export {Provider, DataContext} 