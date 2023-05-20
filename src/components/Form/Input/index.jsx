import React from "react";
import styles from "./style.module.css";

export default function Input({ createTitle, value, placeholder, style }) {
  const handleChange = (event) => {
    createTitle(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      style={style}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
