import React from "react";
import "./index.css";

const AvatarBadge = (props) => {
  const { children, statusColor } = props;
  return (
    <div className="avatar_badge">
      <div
        style={{ background: statusColor, borderRadius: "50%" }}
        className="avatar_badge_wrap"
      >
        {children}
      </div>
    </div>
  );
};

export default AvatarBadge;
