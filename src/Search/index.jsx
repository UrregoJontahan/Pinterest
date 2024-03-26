import React, { useState, useRef, useEffect, useContext } from "react";
import "./search.css";
import { DataContext } from "../Provider";

export function Search() {
  const [clickInX, setClickInX] = useState(false);
  const [state, setState] = useState("")
  const inputRef = useRef(null);
  const { handleSearchChange} = useContext( DataContext);

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

  const onChangeHandleClick = (e) => {
    handleSearchChange(e.target.value);
    setState(e.target.value)
  };

  const resetSearch = () =>{
    setState("")
    setClickInX(false)
    handleSearchChange("")
  }

  return (
    <div className="counter-input">
      <div className="container-input-answer">
        <input
          type="text"
          className="btn-search"
          placeholder="🔍 Buscar"
          onClick={() => setClickInX(true)}
          onChange={onChangeHandleClick}
          ref={inputRef}
          value={state}
        />
      </div>

      <div className="container-x-cancel">
        {clickInX && (
          <button className="btn-x-cancel" onClick={resetSearch}>
            x
          </button>
        )}
      </div>
    </div>
  );
}




