import React from "react";
import "./index.css";

const PrimaryButton = (props) => {
  const { children, visuals, variant } = props;

  // let primaryButtonStyle;
  const defaultPrimaryBtnStyle = {};

  // switch (variant) {
  //   case "outlined":
  //     primaryButtonStyle = {
  //       backgroundColor: "transparent",
  //       color: "#059669",
  //       border: "1px solid #059669",
  //     };
  //     break;

  //   case "text":
  //     primaryButtonStyle = { backgroundColor: "transparent", color: "#059669" };
  //     break;

  //   default:
  //     primaryButtonStyle = { backgroundColor: "#059669", color: "#fff" };
  // }

  return (
    <button
      className="primary_button"
      style={{ ...visuals, ...defaultPrimaryBtnStyle }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
