import React from "react";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to FLING.AI Live Coding Interview</h1>
      <p className={styles.description}>
        This is a React-based home page using CSS Modules for styling.
      </p>
      <button className={styles.button} onClick={() => alert("Let's Code!")}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;