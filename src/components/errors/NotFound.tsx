import React from "react";
import ErrorAlert from "./ErrorAlert";

const NotFound: React.FC = () => {
  return (
    <div>
      <ErrorAlert code={404} message={"oops, there is nothing holding here"} />
    </div>
  );
};

export default NotFound;
