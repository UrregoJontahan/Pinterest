import React from "react";
import "./images.css"
import { InputFile } from "./InputFile";

export function UploadsImages(){
    return (
     <div className="counter-father">
         <div className="uploads-images">
            <div className="create-pin">Crear Pin</div>
            <div className="more">
                <div className="option-more">+</div>
                <div className="show-box">➾</div>
            </div>
          <InputFile/>
        </div>
     </div>
    )
}