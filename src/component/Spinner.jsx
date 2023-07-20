import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
