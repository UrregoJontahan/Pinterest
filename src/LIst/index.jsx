import React, { useEffect, useState } from "react";
import "./listImages.css";
import { Api } from "../API";

export function ListImages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await Api();
        setImages(data);
    };

    return (
        <div className="counter-images">
            <div className="images">
                {images.map((image, index) => (
                    <img key={index} src={image.url} className="img-ramdom"/>
                ))}
            </div>
        </div>
    );
}