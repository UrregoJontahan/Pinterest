import React from "react"
import { LinkTo } from "../LinkTo"
import "./buttonHomePage.css"

export function ButtonHomePage(){
    return(
        <div className="back-main">
            <LinkTo route={"/"} buttonText={"🡸 Para ti"}/>
        </div>
    )
}