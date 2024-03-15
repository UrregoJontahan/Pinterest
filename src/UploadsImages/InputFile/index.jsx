import React, { useState } from "react";
import "./inputfile.css"
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export function InputFile( {onFileSeleted} ){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        setSelectedFile(file)
        onFileSeleted(file)
        console.log(file)
    }

    return(
        <div className="create">
            <form className="file-upload-form">
                <label for="file-img" className="file-upload-label">
                    <div className="file-upload-design">
                            <FaArrowAltCircleUp size={30} />
                        <div className="text-button">
                            <p>Elige un archivo o arrastralo y <br /><span className="text-2">colocalo aquí</span></p>
                        </div>
                        <div className="text-info">
                            <p>Recomendamos usar archivos .jpg de alta calidad con un 
                                tamaño inferior a 20MB o archivos .mp4 con un tamaño
                                inferior a 200MB
                            </p>
                        </div>
                    </div>
                    <input id="file-img" 
                           type="file" 
                           accept="image/*,video/*" 
                           onChange={handleFileChange} />
                </label>
            </form>
            <div className="container-add-url">
                <Link to={"/save-url"} className="add-url"> Guardar desde la URL</Link>
            </div>
        </div>
    )
}