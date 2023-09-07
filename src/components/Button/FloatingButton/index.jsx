import React from "react";
import "./index.css";

const FloatingButton = (props) => {
  const { children } = props;
  return <button className="floating_button">{children}</button>;
};

export default FloatingButton;
