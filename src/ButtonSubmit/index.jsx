import React, { useState } from "react";
import { createImage } from "../API";
import "./buttonSubmit.css";

export function ButtonSubmit({ formData }) {
    const [loading, setLoading] = useState(false);

    const handleClickSubmit = async () => {
        setLoading(true);

        try {
            let { tags = [] } = formData;
            let toList = tags.split(",")
            formData.tags = toList
            const response = await createImage(formData)

            if (!response.ok) {
                throw new Error("Error al enviar los datos");
            }

        } finally {
            setLoading(false);
            window.location.reload(); 
            // Para limpiar los datos necesita recarga la página
            // solo limpia los estados: regresa los estados al punto inicial
        }
    };


    return (
            <div className="btn-submit">
                <p>Se guardarán los cambios</p>
                <button className="btn-put" onClick={handleClickSubmit} >
                    {loading ? "Publicando..." : "Publicar"}
                </button>
            </div>
        
    );
}
