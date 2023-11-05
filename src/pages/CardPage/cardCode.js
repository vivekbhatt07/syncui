const dismissCardJsx = `import React from "react";
import "./index.css";
import { Close } from "@mui/icons-material";

const DismissCard = (props) => {
  const { title, children } = props;
  return (
    <div className="dismiss_card">
      <div className="dismiss_card_head">
        <div className="dismiss_card_title">{title}</div>
        <button className="dismiss_card_close">
          <Close />
        </button>
      </div>
      <div className="dismiss_card_body">{children}</div>
    </div>
  );
};

export default DismissCard;
`;
const dismissCardStyle = `.dismiss_card {
    border-radius: 8px;
    background-color: #fff;
    min-width: 350px;
    max-width: 350px;
    min-height: 200px;
    max-height: 200px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .dismiss_card_head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dismiss_card_title {
        font-size: 16px;
        font-weight: 600;
      }
      .dismiss_card_close {
        color: #282828;
        border: none;
        background-color: #ddd;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
    }
  
    .dismiss_card_body {
      background-color: #ddd;
      height: 100%;
      flex: 1;
      border-radius: 4px;
      padding: 8px;
    }
  }
  `;

const badgeCardJsx = `import React from "react";
import "./index.css";

const BadgeCard = (props) => {
  const {
    label,
    labelColor = "#fff",
    labelBg = "#16a34a",
    children,
    visuals,
  } = props;
  return (
    <div className="badge_card" style={{ ...visuals }}>
      <div
        className="badge_card_label"
        style={{ background: labelBg, color: labelColor }}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BadgeCard;
`;
const badgeCardStyle = `.badge_card {
  border-radius: 8px;
  padding: 42px 16px 16px 16px;
  background: #fff;
  max-width: 250px;
  min-width: 250px;
  min-height: 300px;
  max-height: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.badge_card_label {
  padding: 8px 12px;
  border-bottom-right-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
}
`;
const shadowCardJsx = `import React from "react";
import "./index.css";

const ShadowCard = (props) => {
  const { children } = props;
  return <div className="shadow_card">{children}</div>;
};

export default ShadowCard;
`;
const shadowCardStyle = `.shadow_card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background: #fff;
  min-height: 350px;
  max-height: 350px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 8px;
  padding: 16px;
}
`;
const textOverlayCardJsx = `import React from "react";
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
`;
const textOverlayCardStyle = `.textOverlay_card {
  min-width: 250px;
  max-width: 250px;
  min-height: 300px;
  max-height: 300px;
  background: #fff;
  position: relative;
}

.textOverlay_card_img {
  position: absolute;
  inset: 0 0 0 0;
}

.textOverlay_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textOverlay_card_body {
  z-index: 2;
  width: 100%;
  position: absolute;
  height: 50%;
  bottom: 0;
  background-color: #000;
  opacity: 0.7;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
}
`;

const primaryCardJsx = `import React from "react";
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
`;
const primaryCardStyle = `.primary_card {
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 12px;
}

.primary_head {
  width: 100%;
}

.primary-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
`;

const textCardJsx = `import React from "react";
import "./index.css";

const TextCard = (props) => {
  const { children, bgColor, visuals } = props;
  return (
    <div className="text_card" style={{ backgroundColor: bgColor, ...visuals }}>
      {children}
    </div>
  );
};

export default TextCard;
`;

const textCardStyle = `.text_card {
  background-color: #cbf6ff;
  border-radius: 8px;
  min-width: 210px;
  max-width: 210px;
  min-height: 250px;
  max-height: 250px;
  padding: 1em;
  margin: 1em;
  color: #000;
}
`;

export {
  dismissCardJsx,
  dismissCardStyle,
  badgeCardJsx,
  badgeCardStyle,
  shadowCardJsx,
  shadowCardStyle,
  textOverlayCardJsx,
  textOverlayCardStyle,
  primaryCardJsx,
  primaryCardStyle,
  textCardJsx,
  textCardStyle,
};
