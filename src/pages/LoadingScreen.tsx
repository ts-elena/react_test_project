import React from "react";
import LoaderCircle from "../components/LoaderCircle";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-page-content">
      <LoaderCircle />
    </div>
  );
};

export default LoadingScreen;
