import React from "react";
import "./index.css";

const FeatureContainer = ({ children, title }) => {
  return (
    <div className="feature_container">
      <h2 className="feature_container_head">{title}</h2>
      <div className="feature_container_body">{children}</div>
    </div>
  );
};

export default FeatureContainer;
