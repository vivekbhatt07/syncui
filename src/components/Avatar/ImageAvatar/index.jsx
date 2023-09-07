import React from "react";
import "./index.css";

const ImageAvatar = (props) => {
  const { avatarSource, avatarAlt, dimension } = props;
  return (
    <div
      className="image_avatar"
      style={{ width: dimension, height: dimension }}
    >
      <img
        src={avatarSource}
        alt={avatarAlt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageAvatar;
