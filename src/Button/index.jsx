import React from "react";
import "./buttonCreate.css";
import { Link } from "react-router-dom";

export function ButtonCreate(){ // rename to Link or LinkToCreate

    return(
        <div className="counter-create-button">
            <Link to={'/uploads-img'}
                className="btn-create"
                >Crear
            </Link>
        </div>
    )
}