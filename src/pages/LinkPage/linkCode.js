const primaryLinkJsx = `import React from "react";
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
`;

const primaryLinkStyle = `.primary_link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;
    font-size: 16px;
  }
  
  .primary_link:hover {
    color: #fff;
  }
  `;

export { primaryLinkJsx, primaryLinkStyle };
