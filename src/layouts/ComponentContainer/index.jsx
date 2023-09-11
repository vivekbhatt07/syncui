import React from "react";
import "./index.css";
import CodePreview from "../../components/CodePreview";

const ComponentContainer = ({
  children,
  componentTitle,
  componentSubtitle,
  componentJsx,
  componentStyle,
}) => {
  return (
    <div className="component_container">
      <div className="component_container_head">
        <h2>{componentTitle}</h2>
        <p>{componentSubtitle}</p>
      </div>
      <div className="component_container_body">
        <CodePreview code={componentJsx} isJsx />
        <CodePreview code={componentStyle} isStyle />
      </div>
    </div>
  );
};

export default ComponentContainer;
