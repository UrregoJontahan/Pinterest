import React, { useState } from "react";
import "./buttonSubmit.css";

export function ButtonSubmit({ formData }) {
    const [loading, setLoading] = useState(false);

    const handleClickSubmit = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://todo-para-isa.zeabur.app/pinterest/create", {
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
        }
    };

    return (
        <div className="btn-submit">
            <p>Se guardarán los cambios</p>
            <button className="btn-put" onClick={handleClickSubmit} disabled={loading}>
                {loading ? "Enviando..." : "Publicar"}
            </button>
        </div>
    );
}
