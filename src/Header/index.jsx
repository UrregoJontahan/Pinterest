import React from "react";
import "./header.css";

export function Header({ children }){
    return(
        <div className="container">
           {children}
        </div>
    )
}