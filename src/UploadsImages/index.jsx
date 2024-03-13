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
                <div className="box-create-img">
                    <div className="upload-box-images"></div>
                </div>
            </div>
        </div>
     </div>
    )
}