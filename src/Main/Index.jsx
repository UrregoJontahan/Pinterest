import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./main.css"

export function Main(){
    const [main, setmain] = useState(null)

    const handleClickMain = (e) =>{
        setmain(e)
    }

    return(
        <div className="counter-main-button">
            <Link to={'/'}
            className="btn-main"
            onClick={handleClickMain}
            >
                Inicio
            </Link>
        </div>
    )
}