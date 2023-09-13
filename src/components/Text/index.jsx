import React from "react";
import "./index.css";

export default function Text({ variant, children, className }) {
  switch (variant) {
    case "small":
      return (
        <small className={className ? " " + className : ""}>{children}</small>
      );
    case "p":
      return <p className={className ? " " + className : ""}>{children}</p>;
    case "q":
      return <q className={className ? " " + className : ""}>{children}</q>;
    default:
      return <p className={className ? " " + className : ""}>{children}</p>;
  }
}
