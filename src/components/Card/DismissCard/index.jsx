import React from "react";
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
