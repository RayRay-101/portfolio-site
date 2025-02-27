import React from "react";
import "../styles/BubbleAnimation.css"; 

const BubbleAnimation = () => {
    return (
        <div className="bubbles-container">
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bubble"></div>
            ))}
        </div>
    );
};

export default BubbleAnimation;
