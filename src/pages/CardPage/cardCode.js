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

export { dismissCardJsx, dismissCardStyle };
