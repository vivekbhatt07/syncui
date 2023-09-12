const imageAvatarJsx = `import React from "react";
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
`;
const textAvatarJsx = `import React from "react";
import "./index.css";

const TextAvatar = (props) => {
  const { avatarName, avatarBg, dimension = "20" } = props;
  return (
    <div
      className="text_avatar"
      style={{
        width: dimension + px,
        height: dimension + px,
        backgroundColor: avatarBg,
        fontSize: dimension * 0.5 + px,
      }}
    >
      {avatarName[0]}
    </div>
  );
};

export default TextAvatar;
`;

const imageAvatarStyle = `.image_avatar {
    border-radius: 50%;
    overflow: hidden;
  }
  `;
const textAvatarStyle = `.text_avatar {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: "#fff";
    font-weight: 500;
    color: #fff;
  }
  `;

export { imageAvatarJsx, imageAvatarStyle, textAvatarJsx, textAvatarStyle };
