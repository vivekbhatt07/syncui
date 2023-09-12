const alertJsx = `import React from "react";
import "./index.css";

import {
  CheckCircleOutlineRounded,
  ErrorOutline,
  WarningAmber,
  InfoOutlined,
} from "@mui/icons-material";

const Alert = (props) => {
  const {
    severity = "success",
    message,
    isIcon = true,
    severityBg,
    severityIcon,
    severityColor,
  } = props;

  const alertType = severity;
  let alertColor;
  let alertBg;
  let alertIcon;
  switch (alertType) {
    case "error":
      alertColor: "#fff";
      alertBg = "#f87171";
      alertIcon = <ErrorOutline />;
      break;
    case "warning":
      alertColor: "#fff";
      alertBg = "#fdba74";
      alertIcon = <WarningAmber />;
      break;
    case "info":
      alertColor: "#fff";
      alertBg = "#4cc9f0";
      alertIcon = <InfoOutlined />;
      break;
    case "success":
      alertColor: "#fff";
      alertBg = "#16a34a";
      alertIcon = <CheckCircleOutlineRounded />;
      break;
    case severity:
      alertColor: severityColor;
      alertBg = severityBg;
      alertIcon = severityIcon;
    default:
      alertBg = "#34d399";
  }
  return (
    <div
      className="alert"
      style={{ backgroundColor: alertBg, color: !alertColor && "inherit" }}
    >
      {(isIcon || severityIcon) && (
        <div style={{ display: "flex" }}>{alertIcon}</div>
      )}
      <span>{message}</span>
    </div>
  );
};

export default Alert;
`;

const alertStyle = `.alert {
    display: flex;
    min-width: 300px;
    max-width: 200px;
    max-height: 50px;
    border-radius: 4px;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    gap: 8px;
  }`;

export { alertJsx, alertStyle };
