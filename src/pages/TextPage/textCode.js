const textCodeJsx = `import React from "react";
import "./index.css";

const Text = (props) => {
  const { children, visuals, variant } = props;
  switch (variant) {
    case "p": {
      return (
        <p style={{ ...visuals }} className="text-p">
          {children}
        </p>
      );
    }
    case "span": {
      return (
        <span style={{ ...visuals }} className="text-span">
          {children}
        </span>
      );
    }
    case "strong": {
      return (
        <strong style={{ ...visuals }} className="text-strong">
          {children}
        </strong>
      );
    }
    case "em": {
      return (
        <em style={{ ...visuals }} className="text-em">
          {children}
        </em>
      );
    }
    case "code": {
      return (
        <code style={{ ...visuals }} className="text-code">
          {children}
        </code>
      );
    }
    case "dfn": {
      return (
        <dfn style={{ ...visuals }} className="text-dfn">
          {children}
        </dfn>
      );
    }
    case "cite": {
      return (
        <cite style={{ ...visuals }} className="text-cite">
          {children}
        </cite>
      );
    }
    case "abbr": {
      return (
        <abbr style={{ ...visuals }} className="text-abbr">
          {children}
        </abbr>
      );
    }
    case "blockquote": {
      return (
        <blockquote style={{ ...visuals }} className="text-blockquote">
          {children}
        </blockquote>
      );
    }
    case "div": {
      return (
        <div style={{ ...visuals }} className="text-div">
          {children}
        </div>
      );
    }
    default: {
      return (
        <p style={{ ...visuals }} className="text-p">
          {children}
        </p>
      );
    }
  }
};

export default Text;

`;

export { textCodeJsx };
