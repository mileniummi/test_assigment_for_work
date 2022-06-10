import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loader.css";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="loader">
      <CircularProgress color={"success"} />
      <div className="loader__text">{message}</div>
    </div>
  );
};

export default Loader;
