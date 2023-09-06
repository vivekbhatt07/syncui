import React from "react";
import "./index.css";

const IconButton = (props) => {
  const { children } = props;
  return <button className="icon_button">{children}</button>;
};

export default IconButton;
