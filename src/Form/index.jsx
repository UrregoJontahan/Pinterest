import React from "react";
import "./form.css"
import { useState,useEffect } from "react";

export function Form({onFormDataChange}){

    const imageSelectedUpload = localStorage.getItem("selectedImage")

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        tags: [],
        image:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData]);

    return(
        <div className="container-form">
            <div className="container-data-form-img">
                <div className="img-selected">
                    {imageSelectedUpload && <img className="image-select" 
                                                 src={imageSelectedUpload} 
                                                 name="image" 
                                                 value={formData.image}/>}
                </div>
                <div className="input-text-data">
                    <p>Titulo</p>
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Agrega un titulo"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <p>Categorías</p>
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Agrega una categoría"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <p>Temas etiquetados</p>
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Buscar una etiqueta"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}