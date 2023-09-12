const heading_jsx = `
import React from "react";
import "./index.css";

const Heading = (props) => {
  const { variant = "h1", children, visual, className = "" } = props;
  switch (variant) {
    case "h1": {
      return (
        <h1
          style={{ ...visual }}
          className={"h1" + className ? " " + className : ""}
        >
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2
          style={{ ...visual }}
          className={"h2" + className ? " " + className : ""}
        >
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3
          style={{ ...visual }}
          className={"h3" + className ? " " + className : ""}
        >
          {children}
        </h3>
      );
    }
    case "h4": {
      return (
        <h4
          style={{ ...visual }}
          className={"h4" + className ? " " + className : ""}
        >
          {children}
        </h4>
      );
    }
    case "h5": {
      return (
        <h5
          style={{ ...visual }}
          className={"h5" + className ? " " + className : ""}
        >
          {children}
        </h5>
      );
    }
    case "h6": {
      return (
        <h6
          style={{ ...visual }}
          className={"h6" + className ? " " + className : ""}
        >
          {children}
        </h6>
      );
    }
  }
};

export default Heading;
`;

const heading_style = `.h1 {
    font-size: 28px;
    line-height: 1.2;
  }
  
  .h2 {
    font-size: 26px;
    line-height: 1.2;
  }
  
  .h3 {
    font-size: 24px;
    line-height: 1.2;
  }
  
  .h4 {
    font-size: 22px;
    line-height: 1.2;
  }
  
  .h5 {
    font-size: 20px;
    line-height: 1.2;
  }
  
  .h6 {
    font-size: 18px;
    line-height: 1.2;
  }
  
  @media (min-width: 768px) {
    .h1 {
      font-size: 32px;
      line-height: 1.4;
    }
  
    .h2 {
      font-size: 28px;
      line-height: 1.4;
    }
  
    .h3 {
      font-size: 24px;
      line-height: 1.4;
    }
  
    .h4 {
      font-size: 20px;
      line-height: 1.4;
    }
  
    .h5 {
      font-size: 18px;
      line-height: 1.4;
    }
  
    .h6 {
      font-size: 18px;
      line-height: 1.4;
    }
  }
  
  @media (min-width: 1280px) {
    .h1 {
      font-size: 40px;
      line-height: 1.6;
    }
  
    .h2 {
      font-size: 36px;
      line-height: 1.6;
    }
  
    .h3 {
      font-size: 32px;
      line-height: 1.6;
    }
  
    .h4 {
      font-size: 28px;
      line-height: 1.6;
    }
  
    .h5 {
      font-size: 24px;
      line-height: 1.6;
    }
  
    .h6 {
      font-size: 22px;
      line-height: 1.6;
    }
  }
  `;

export { heading_jsx, heading_style };
