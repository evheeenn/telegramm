import React from "react";
import styles from "./style.module.css";

export default function StatusButton({
  color,
  action = () => {},
  text,
  padding,
  classN,
}) {
  return (
    <div
      style={{
        padding: padding,
        fontSize: "14px",
        fontWeight: "700",
        background: color,
      }}
      onClick={action}
      className={classN}
      padding={padding}
    >
      {text}
    </div>
  );
}
