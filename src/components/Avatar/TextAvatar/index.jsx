import React from "react";
import "./index.css";

const TextAvatar = (props) => {
  const { avatarName, avatarBg, dimension = "20" } = props;
  return (
    <div
      className="text_avatar"
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: avatarBg,
        fontSize: `${dimension * 0.5}px`,
      }}
    >
      {avatarName[0]}
    </div>
  );
};

export default TextAvatar;
