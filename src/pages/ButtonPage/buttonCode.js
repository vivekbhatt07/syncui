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

export { basicButtonJsx, basicButtonStyle };
