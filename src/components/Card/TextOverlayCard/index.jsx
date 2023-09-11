import React from "react";
import "./index.css";

const TextOverlayCard = (props) => {
  const { children, thumbnail, altText } = props;
  return (
    <div className="textOverlay_card">
      <div className="textOverlay_card_body">{children}</div>
      <div className="textOverlay_card_img">
        <img src={thumbnail} alt={altText} />
      </div>
    </div>
  );
};

export default TextOverlayCard;
