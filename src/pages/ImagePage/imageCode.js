const roundedImageJsx = `import React from "react";
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
`;

const roundedImageStyle = `.round_image {
  overflow: hidden;
}

.round_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}  `;

const responsiveImageJsx = `import React from "react";
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
`;

const responsiveImageStyle = `.responsive_image {
  display: flex;
}
`;

export {
  roundedImageJsx,
  roundedImageStyle,
  responsiveImageJsx,
  responsiveImageStyle,
};
