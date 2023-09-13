const basicButtonJsx = `import React from "react";
import "./index.css";

const PrimaryButton = (props) => {
  const { children, visuals, variant } = props;
  
  return (
    <button className="primary_button" style={{ ...visuals }}>
      {children}
    </button>
  );
};

export default PrimaryButton;`;

const basicButtonStyle = `.primary_button {
  padding: 0.5em 1.2em;
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease-in;
}

.primary_button:hover {
  background: #047857;
}

.primary_button:active {
  background: #065f46;
}
`;

const floatingButtonJsx = `import React from "react";
import "./index.css";

const FloatingButton = (props) => {
  const { children } = props;
  return <button className="floating_button">{children}</button>;
};

export default FloatingButton;`;

const floatingButtonStyle = `.floating_button {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #059669;
  border: none;
  transition: background 0.2s ease-in-out;
  color: #fff;
}

.floating_button:hover {
  background: #047857;
}

.floating_button:active {
  background: #065f46;
  transform: scale(0.98);
}
`;

const iconButtonJsx = `import React from "react";
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
`;
const iconButtonStyle = `.icon_button {
  padding: 0.5em 1.2em;
  border: none;
  background: #059669;
  display: flex;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
}

.icon_button:hover {
  background: #047857;
}

.icon_button:active {
  background: #065f46;
}
`;

const linkButtonJsx = `import React from "react";
import "./index.css";

const LinkButton = (props) => {
  const { children, reach } = props;
  return (
    <a className="link_button" href={reach}>
      {children}
    </a>
  );
};

export default LinkButton;`;

const linkButtonStyle = `.link_button {
  color: #10b981;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  position: relative;
}

.link_button::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #10b981;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.link_button:hover::before {
  transform: scaleX(1);
}

.link_button:hover {
  color: #34d399;
}

.link_button:active {
  color: #fff;
}
`;

export {
  basicButtonJsx,
  basicButtonStyle,
  floatingButtonJsx,
  floatingButtonStyle,
  iconButtonJsx,
  iconButtonStyle,
  linkButtonJsx,
  linkButtonStyle,
};
