import React from "react";
import "./index.css";

const IconButton = (props) => {
  const { children, iconTitle, iconLogo, iconText } = props;
  return (
    <button className="icon_button" title={iconTitle}>
      {iconLogo}
      {iconText}
    </button>
  );
};

export default IconButton;
