import React from "react";
import "./index.css";
import Sidebar from "../Sidebar";

const PageContainer = ({ pageTitle, pageSubtitle, children }) => {
  return (
    <div className="page">
      <div className="page_sidebar">
        <Sidebar />
      </div>

      <main className="page_main">
        <div className="page_main_wrap">
          <div className="page_main_head">
            <h1 className="page_main_title">{pageTitle}</h1>
            <p className="page_main_subtitle">{pageSubtitle}</p>
          </div>
          <div className="page_main_body">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PageContainer;
