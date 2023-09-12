const avatarBadgeJsx = `import React from "react";
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
`;
const avatarBadgeStyle = `.avatar_badge {
    position: relative;
    display: inline-block;
    border-radius: 50%;
  }
  
  .avatar_badge_wrap {
    border-radius: 50%;
  }
  
  .avatar_badge_wrap::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    right: 3%;
    bottom: 10%;
    background-color: inherit;
  }
  `;
const iconBadgeJsx = `import React from "react";
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
`;
const iconBadgeStyle = `.icon_badge {
    position: relative;
    display: inline-block;
  }
  
  .icon_badge_wrap svg {
    font-size: 1em;
  }
  
  .icon_dot {
    position: absolute;
    width: 45%;
    height: 45%;
    border-radius: 50%;
    top: -20%;
    right: -15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30%;
    font-weight: 600;
    color: #fff;
  }
  `;

export { avatarBadgeJsx, avatarBadgeStyle, iconBadgeJsx, iconBadgeStyle };
