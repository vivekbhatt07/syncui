import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./index.css";
import { PrimaryButton } from "../../components";

const CodePreview = ({ code, children, isJsx, isStyle }) => {
  return (
    <div className="code_preview">
      <PrimaryButton className="code_preview_btn">Copy</PrimaryButton>
      {isJsx && <PrimaryButton className="code_preview_jsx">JSX</PrimaryButton>}
      {isStyle && (
        <PrimaryButton className="code_preview_style">CSS</PrimaryButton>
      )}
      <SyntaxHighlighter
        language="javascript"
        style={{ ...darcula }}
        customStyle={{ padding: "42px 16px 16px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
