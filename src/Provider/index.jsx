import React, { createContext,useEffect,useState } from "react";
import { Api } from "../API";

const DataContext = createContext()

function Provider( {children} ){
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await Api();
        setImages(data);
    };

    return(
        <DataContext.Provider value={{images, selectedImage , setSelectedImage}}>
            {children}
        </DataContext.Provider>
    )
}

export {Provider, DataContext}