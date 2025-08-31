"use client";
import React from "react";
import styles from "./footer.module.css";
import Tooltip from "../Tootltip";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">@2025 Sourabh Kalaskar- All rights reserved </div>
      <div className={styles.tooltip}>
        <Tooltip />
      </div>
    </div>
  );
};

export default Footer;
