import React, { useState } from "react";
import "./buttonCreate.css";
import { Link } from "react-router-dom";

export function ButtonCreate(){

    const [create, setCreate] = useState(null)

    const handleClickCreate = (e) =>{
        setCreate(e)
        console.log("click")
    }

    return(
        <div className="counter-create-button">
            <Link to={'/uploads-img'}
            className="btn-create"
            onClick={handleClickCreate}
            >
                Crear
            </Link>
        </div>
    )
}