import React from "react";
import spinner from "../assets/spinner.gif";
import spinnerDark from "../assets/spinnerDark.gif";

const Spinner = (props) => {
  return (
    <div className="flex justify-center ">
      <img src={props.mode === 50 ? spinner : spinnerDark} alt="spinner" />
    </div>
  );
};

export default Spinner;
