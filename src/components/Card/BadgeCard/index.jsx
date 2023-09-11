import React from "react";
import "./index.css";

const BadgeCard = (props) => {
  const {
    label,
    labelColor = "#fff",
    labelBg = "#16a34a",
    children,
    visuals,
  } = props;
  return (
    <div className="badge_card" style={{ ...visuals }}>
      <div
        className="badge_card_label"
        style={{ background: labelBg, color: labelColor }}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BadgeCard;
