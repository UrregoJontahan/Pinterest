import React, { useState } from "react";
import "./buttonSubmit.css";

export function ButtonSubmit({ formData }) {
    const [loading, setLoading] = useState(false);

    const handleClickSubmit = async () => {
        setLoading(true);

        try {
            let { tags = [] } = formData;
            let toList = tags.split(",")
            formData.tags = toList
            const response = await fetch("http://localhost:4000/pinterest/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error al enviar los datos");
            }

        } finally {
            setLoading(false);
            window.location.reload();
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
