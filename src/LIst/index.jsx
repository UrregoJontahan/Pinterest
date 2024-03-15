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
                {images.map((image) => (
                    <img key={image._id} src={image.image} className="img-ramdom"/>
                ))}
            </div>
        </div>
    );
}