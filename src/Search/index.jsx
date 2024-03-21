import React, { useState, useRef, useEffect, useContext } from "react";
import "./search.css";
import { DataContext } from "../Provider";

export function Search() {
  const [clickInX, setClickInX] = useState(false);
  const inputRef = useRef(null);
  const { handleSearchChange, filtered } = useContext(DataContext)

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

  const onChangeHandleClick=(e)=>{
    handleSearchChange(e.target.value)
}

  return (
    <div className="counter-input">
      <div className="container-input-answer">
        <input
          type="search"
          className="btn-search"
          placeholder="🔍 Buscar"
          onClick={() => setClickInX(true)}
          onChange={onChangeHandleClick}
          ref={inputRef}
        />
      </div>

      <div className="container-x-cancel">
        {clickInX && (
          <button className="btn-x-cancel" onClick={() => setClickInX(false)}>
            x
          </button>
        )}
      </div>

      {clickInX && (
        <div className="container-answers">
          <div className="results">
            {filtered.map(({title, category, tags})=>(<p>{title && category && tags}</p>))}
          </div>
        </div>
      )}
    </div>
  );
}



