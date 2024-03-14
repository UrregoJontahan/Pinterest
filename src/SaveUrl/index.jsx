import React from "react";
import "./saveurl.css"
import { Link } from "react-router-dom";

export function SaveUrl(){

    return (
        <div className="first-container">
            <div className="page-save-url">
                <h2 className="title">guarda ideas desde un sitio web</h2>
                <p className="text-subtitle">Selecciona hasta diez imágenes</p>
                <div className="btn-back">
                    <Link to={"/uploads-img"} className="btn-back-arrow">➔</Link>
                </div>
                <div className="container-search-url">
                    <input className="btn-search-url" type="search" placeholder="ingresa el sitio web"/>
                    <div className="container-x-cancel-url">
                        <button
                            className="btn-x-cancel-url"
                        >x
                        </button>
                    </div>
                </div>
            </div>
        </div>
      
    )
}


 
