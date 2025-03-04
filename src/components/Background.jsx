import React from "react";

const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(#F9F9F9, #F8F8F8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100vw" height="100vh">
        <defs>
          <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#F8F8F8" />
            <stop offset="100%" stopColor="#F2F2F2" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="#F9F9F9" />
        <circle cx="400" cy="300" r="250" fill="url(#moonGradient)" />
      </svg>
    </div>
  );
};

export default Background;
