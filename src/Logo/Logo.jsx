import React from "react";
import { FaPinterest } from "react-icons/fa";
import "./logo.css"
import { Link } from "react-router-dom";

export function Logo(){
    return (
        <Link to={""} className="logo-container">
            <FaPinterest className="logo" />
        </Link>
    )
}