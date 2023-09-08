import React from "react";
import { TextAvatar, Alert } from "../../components";
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
      <main className="getStarted_main" style={{ padding: "32px" }}>
        <Alert severity="info" message="Hello world" />
      </main>
    </div>
  );
};

export default GetStarted;
