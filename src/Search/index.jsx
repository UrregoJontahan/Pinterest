import React from "react";
import "./search.css"

export function Search () {
    return (
        <div className="counter-input">
            <input 
            type="search" 
            className="btn-search"
            placeholder="🔍 Buscar"
            />
        </div>
    )
}