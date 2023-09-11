import React from "react";
import "./index.css";

const ShadowCard = (props) => {
  const { children } = props;
  return <div className="shadow_card">{children}</div>;
};

export default ShadowCard;
