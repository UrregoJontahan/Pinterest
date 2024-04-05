import React, { useContext, useEffect, useState, useRef } from "react";
import "./listImages.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";
import { FaHeart } from "react-icons/fa6";
import { Confeti } from "../congratulations";

export function ListImages() {
    const { filteredImages } = useContext(DataContext);
    const [showConfeti, setShowConfeti] = useState(false);
    const [isLoading, setLoadingState] = useState(true);
    const [show, setShow] = useState(false);
    const containerRef = useRef(null);
    const [showAdditionalImages, setShowAdditionalImages] = useState(false);


    const handleLikeClick = () => {
        setShowConfeti(true);
        setTimeout(() => {
            setShowConfeti(false);
        }, 1000);
    };

    useEffect(() => {
        const handleIntersect = (entries, observer) => {
            const el = entries[0];
            console.log(el.isIntersecting);
            if (el.isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "0px",
            threshold: 0.7
        });

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="father-counter-images">
            <div className="counter-images" ref={containerRef}>
                {show && (
                    <div className="images">
                        {filteredImages.map(({ image, _id }) => (
                            <div key={_id + Date.now() + Math.random()} className="image-container">
                                <Link to={`/page-pin/${_id}`}>
                                    {isLoading && <div className="countainer-loader"><div className="loader" /></div>}
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        className={`img-ramdom ${isLoading && "loading-opacity"}`}
                                        src={image}
                                        onLoad={() => setLoadingState(false)}
                                    />
                                </Link>
                                <button className="btn-save-image" onClick={handleLikeClick}>
                                    <FaHeart className="icon-heart" />
                                    {showConfeti && <Confeti />}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


