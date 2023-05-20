import React from "react";
import styles from "./style.module.css";

export default function Button({
  color = "#3772F2",
  action = () => {},
  text,
  padding,
  classN,
  borderRadius,
}) {
  return (
    <button
      style={{
        background: color,
        padding: padding,
        borderRadius: borderRadius,
      }}
      onClick={action}
      className={styles.button + " " + classN}
    >
      {text}
    </button>
  );
}
