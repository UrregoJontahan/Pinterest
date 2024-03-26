import React from "react";
import "./linkTo.css";
import { Link } from "react-router-dom";

export function LinkTo( {route, buttonText} ){ 
    
    return(
        <div className="counter-create-button">
            <Link to={route} 
                className="btn-create"
                >{buttonText}
            </Link>
        </div>
    )
}