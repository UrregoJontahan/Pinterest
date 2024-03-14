import React, { useState, useRef, useEffect } from "react";
import "./search.css";

export function Search() {
  const [clickInX, setClickInX] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !e.target.classList.contains("btn-x-cancel")
      ) {
        setClickInX(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="counter-input">
      <input
        type="search"
        className="btn-search"
        placeholder="🔍 Buscar"
        onClick={() => setClickInX(true)}
        ref={inputRef} 
      />
      <div className="container-x-cancel">
        {clickInX && <button className="btn-x-cancel">x</button>}
      </div>
    </div>
  );
}
