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

    return(
        <DataContext.Provider value={{images, selectedImage , setSelectedImage, handleSearchChange, filtered}}>
            {children}
        </DataContext.Provider>
    )
}

export {Provider, DataContext}