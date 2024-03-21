import React, { useState } from "react";
import "./images.css";
import { InputFile } from "../InputFile";
import { Form } from "../Form";
import { ButtonSubmit } from "../ButtonSubmit";
import { createImage } from "../API";

export function UploadsImages() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const initialState = {
        title: "",
        category: "",
        tags: [],
        image: null,
        autor: "Jonathan",
        aspectRatio: 1,
        format: "jpg",
        size: 5,
        downloads: 34
    };

    const [formData, setFormData] = useState(initialState);
   
    const handleFileSelected = (file) => { 
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            setSelectedImage(imageDataURL);
        };
        reader.readAsDataURL(file);
    };

    const handleFormDataChange = (values) => {
        setFormData({...formData, ...values, image: selectedImage});
    };

    const handleSubmit = async () => {
        try {
            let { tags = [] } = formData;
            let toList = tags.split(",")
            formData.tags = toList
            const response = await createImage(formData)

            if (!response.ok) {
                throw new Error("Error al enviar los datos");
            }
            
            setFormData(initialState);
            setSelectedImage(null);

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="counter-father">
            <div className="big-container">
                <div className="create-pin">Crear Pin</div>
                <div className="more">
                    <div className="show-box">➾</div>
                    <div className="add-img">
                        <span className="add-mor-image">+</span>
                    </div>
                </div>
            </div>
            <div className="counter-form">
                <InputFile onFileSeleted={handleFileSelected} />
                {selectedImage && (
                    <>
                        <Form onFormDataChange={handleFormDataChange} imageSelected={selectedImage}/>
                        <ButtonSubmit onSubmit={handleSubmit} />
                    </>
                )}
            </div>
        </div>
    );
}

