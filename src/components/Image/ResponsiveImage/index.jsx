import React from "react";
import "./index.css";

const ResponsiveImage = (props) => {
  const { thumbnail, thumbnailAlt, imageVisual, visual } = props;
  return (
    <div style={{ ...visual }} className="responsive_image">
      <img
        src={thumbnail}
        alt={thumbnailAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...imageVisual,
        }}
      />
    </div>
  );
};

export default ResponsiveImage;
