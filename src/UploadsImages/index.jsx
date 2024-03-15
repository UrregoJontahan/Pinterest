import React, { useState } from "react";
import "./images.css";
import { InputFile } from "./InputFile";
import { Form } from "../Form";
import { ButtonSubmit } from "../ButtonSubmit";

export function UploadsImages() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        link: "",
        category: "",
        tags: [],
        image: null,
    });

    const handleFileSelected = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            localStorage.setItem("selectedImage", imageDataURL);
            setSelectedImage(file);
        };
        reader.readAsDataURL(file);
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: file,
        }));
    };

    const handleFormDataChange = (formData) => {
        setFormData(formData);
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
