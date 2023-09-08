import React from "react";
import "./index.css";

const IconBadge = (props) => {
  const { children, badgeColor, dimension = "30px", badgeText } = props;
  return (
    <div className="icon_badge">
      <div
        style={{ width: dimension, height: dimension, fontSize: dimension }}
        className="icon_badge_wrap"
      >
        {children}
        <div className="icon_dot" style={{ background: badgeColor }}>
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default IconBadge;
