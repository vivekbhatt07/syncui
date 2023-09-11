import React from "react";
import "./index.css";
import Sidebar from "../Sidebar";

const PageContainer = ({ children }) => {
  return (
    <div className="page">
      <div className="page_sidebar">
        <Sidebar />
      </div>

      <main className="page_main">{children}</main>
    </div>
  );
};

export default PageContainer;
