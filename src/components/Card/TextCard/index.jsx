import React from "react";
import "./index.css";

const TextCard = (props) => {
  const { children, bgColor, visuals } = props;
  return (
    <div className="text_card" style={{ backgroundColor: bgColor, ...visuals }}>
      {children}
    </div>
  );
};

export default TextCard;
