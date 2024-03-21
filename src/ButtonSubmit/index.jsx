import React, { useState } from "react";
import "./buttonSubmit.css";

export function ButtonSubmit({ onSubmit }) {
    const [loading, setLoading] = useState(false);

    const handleClickSubmit = async () => {
        setLoading(true);
        try {
            await onSubmit();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="btn-submit">
            <p>Se guardarán los cambios</p>
            <button className="btn-put" onClick={handleClickSubmit}>
                {loading ? "Publicando..." : "Publicar"}
            </button>
        </div>
    );
}
