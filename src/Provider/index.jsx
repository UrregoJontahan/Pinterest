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

      const filtered = images.filter(({ title, category, tags }) =>
      title.toLowerCase().includes(searchImages.toLowerCase()) ||
      category.toLowerCase().includes(searchImages.toLowerCase()) ||
      tags.some(tag => tag.toLowerCase().includes(searchImages.toLowerCase()))
  );
  
    return(
        <DataContext.Provider value={{images, selectedImage , setSelectedImage, handleSearchChange, filtered ,categoriesMap }}>
            {children}
        </DataContext.Provider>
    )
}

export {Provider, DataContext} 