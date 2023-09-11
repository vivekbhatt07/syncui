import React from "react";
import "./index.css";

const PrimaryButton = (props) => {
  const { children, visuals, variant, className = "" } = props;

  // children, style

  return (
    <button className={`primary_button ${className}`} style={{ ...visuals }}>
      {children}
    </button>
  );
};

export default PrimaryButton;
