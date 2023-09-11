import React from "react";
import "./index.css";

const ComponentFeature = ({ title, subTitle, featureType }) => {
  return (
    <div className="component_feature">
      <h3 className="component_feature_title">{title}</h3>
      <p className="component_feature_subtitle">{subTitle}</p>
      {featureType && (
        <p className="component_feature_type">
          <span>Type: </span>
          <span> {featureType}</span>
        </p>
      )}
    </div>
  );
};

export default ComponentFeature;
