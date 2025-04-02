import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const variant = props.variant || "";

  return (
    <button
      className={`${styles.btn} ${variant && styles[variant]}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
