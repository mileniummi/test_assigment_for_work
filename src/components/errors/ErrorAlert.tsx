import React from "react";
import "./error.css";
import { IError } from "../../types/Errors";

const ErrorAlert: React.FC<IError> = ({ message, code }) => {
  return (
    <div className="error__wrapper">
      <h1 className="error__code">{code}</h1>
      <h2 className="error__message">{message}</h2>
    </div>
  );
};

export default ErrorAlert;
