import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom";


export function ButtonBack(){
    const [click, setClick] = useState()

    const handleClickBack = (e) =>{
        setClick(e.target)
        console.log("click")
    }

    return(
        <Link to={"/"} className="back-main" onClick={handleClickBack}>
            🡸 Para ti
        </Link>
    )
}