import React from "react";
import { TextAvatar } from "../../components";
import "./index.css";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <aside className="getStarted_sidebar">
        <div className="getStarted_sidebar_wrap">
          <div className="item">
            <TextAvatar avatarName="Sync" avatarBg="#047857" dimension="40" />
            <span className="item_subtitle">UI</span>
          </div>
          <div className="item">
            <TextAvatar avatarName="Sync" avatarBg="#047857" dimension="40" />
            <span className="item_subtitle">UI</span>
          </div>
        </div>
      </aside>
      <main className="getStarted_main"></main>
    </div>
  );
};

export default GetStarted;
