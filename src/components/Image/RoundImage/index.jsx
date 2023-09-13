import React from "react";
import "./index.css";

const RoundImage = (props) => {
  const {
    thumbnail,
    dimension = 200,
    thumbnailAlt,
    imageVisual,
    visual,
  } = props;
  return (
    <div
      className="round_image"
      style={{ width: dimension + "px", height: dimension + "px", ...visual }}
    >
      <img src={thumbnail} alt={thumbnailAlt} style={{ ...imageVisual }} />
    </div>
  );
};

export default RoundImage;
