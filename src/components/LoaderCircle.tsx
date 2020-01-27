import React from "react";

const LoaderCircle: React.FC = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="still-circle" />
        <div className="circle" style={{ animationDelay: "0s" }} />
        <div className="circle" style={{ animationDelay: "1.5s" }} />
        <div className="circle" style={{ animationDelay: "3s" }} />
      </div>
    </div>
  );
};

export default LoaderCircle;
