import React from "react";
import "./images.css"

export function UploadsImages(){
    return (
     <div className="counter-father">
         <div className="uploads-images">
            <div className="create-pin">Crear Pin</div>
            <div className="more">
                <div className="option-more">+</div>
                <div className="show-box">➾</div>
            </div>
            <div className="create">
                    <form class="file-upload-form">
                        <label for="file" class="file-upload-label">
                            <div class="file-upload-design">
                            <svg viewBox="0 0 640 512" height="1rem">
                                <path
                                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                ></path>
                            </svg>
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
                            <input id="file" type="file" accept="image/*" />
                        </label>
                    </form>

                    <div className="container-add-url">
                        <button className="add-url"> Guardar desde la URL</button>
                    </div>
            </div>
        </div>
     </div>
    )
}