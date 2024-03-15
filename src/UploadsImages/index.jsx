import React, { useState } from "react";
import "./images.css";
import { InputFile } from "./InputFile";
import { Form } from "../Form";
import { ButtonSubmit } from "../ButtonSubmit";

export function UploadsImages() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        tags: [],
        image: null,
        autor: "Jonathan",
        aspectRatio: 1,
        format: "jpg",
        size: 5, //-> en MB
        downloads: 34
    });

    const handleFileSelected = (file) => { // Blob
        const reader = new FileReader();

        //Esto se ejecuta cuando la función se llame 
        reader.onload = () => {
            const imageDataURL = reader.result;
            setSelectedImage(imageDataURL);
        };

        //Aquí se está llamando
        reader.readAsDataURL(file);
    };

    const handleFormDataChange = (values) => {
        setFormData({...formData, ...values, image: selectedImage});
    };

    return (
        <div className="counter-father">
            <div className="uploads-images">
                <div className="create-pin">Crear Pin</div>
                <InputFile onFileSeleted={handleFileSelected} />
                {selectedImage && (
                    <>
                        <Form onFormDataChange={handleFormDataChange} />
                        <ButtonSubmit formData={formData} />
                    </>
                )}
                <div className="more">
                    <div className="option-more">+</div>
                    <div className="show-box">➾</div>
                </div>
            </div>
        </div>
    );
}
