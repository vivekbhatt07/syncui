import React from "react";
import "./index.css";

const PrimaryCard = (props) => {
  const {
    visual,
    thumbnail,
    thumbnailAlt,
    imageVisual,
    children,
    direction = "column",
  } = props;

  return (
    <div
      className="primary_card"
      style={{
        flexDirection: direction === "row" ? "row" : "column",
        ...visual,
      }}
    >
      <div className="primary_head">
        <img
          src={thumbnail}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...imageVisual,
          }}
          alt={thumbnailAlt ?? "card image"}
        />
      </div>
      <div className="primary_body">{children}</div>
    </div>
  );
};

export default PrimaryCard;
