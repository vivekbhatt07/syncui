import React from "react";
import "./index.css";

const LinkButton = (props) => {
  const { children, reach } = props;
  return (
    <a className="link_button" href={reach}>
      {children}
    </a>
  );
};

export default LinkButton;
