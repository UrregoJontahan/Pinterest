import React from "react";
import { FaPinterest } from "react-icons/fa";
import "./logo.css"
import { LinkTo } from "../LinkTo";

export function Logo(){
    return (
        <div className="logo-container">
           <LinkTo route={"/"} buttonText={ <FaPinterest className="logo" />}/>
        </div>
    )
}