import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const PrimaryLink = (props) => {
  const { children, reach } = props;
  return (
    <NavLink className="primary_link" to={reach}>
      {children}
    </NavLink>
  );
};

export default PrimaryLink;
