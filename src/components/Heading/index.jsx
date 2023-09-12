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
          className={`h2${className ? " " + className : ""}`}
        >
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3
          style={{ ...visual }}
          className={`h3${className ? " " + className : ""}`}
        >
          {children}
        </h3>
      );
    }
    case "h4": {
      return (
        <h4
          style={{ ...visual }}
          className={`h4${className ? " " + className : ""}`}
        >
          {children}
        </h4>
      );
    }
    case "h5": {
      return (
        <h5
          style={{ ...visual }}
          className={`h5${className ? " " + className : ""}`}
        >
          {children}
        </h5>
      );
    }
    case "h6": {
      return (
        <h6
          style={{ ...visual }}
          className={`h6${className ? " " + className : ""}`}
        >
          {children}
        </h6>
      );
    }
  }
};

export default Heading;
