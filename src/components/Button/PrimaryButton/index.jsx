import React from "react";
import "./index.css";

const PrimaryButton = (props) => {
  const { children, visuals, variant } = props;

  // children, style

  return (
    <button className="primary_button" style={{ ...visuals }}>
      {children}
    </button>
  );
};

export default PrimaryButton;
