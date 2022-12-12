import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";
import { Switch } from "@mui/material";
import "./styles.module.css";


function Header() {

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const [mode, setMode] = useState(defaultDark ? true : false);

  const toggleTheme = (e) => {
    if (!mode) {
      setDark();
    } else {
      setLight();
    }
    setMode(!mode);
  };

  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>
        <a href="/">
          CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
        </a>
      </h1>
      <div className={styles.links}>
        <Switch
          defaultChecked
          checked={mode}
          onClick={(e) => {
            toggleTheme();
          }}
        />
        <a href="/">
          <p className={styles.link}>Home</p>
        </a>
        <a href="/compare">
          <p className={styles.link}>Compare</p>
        </a>
        <a href="/watchlist">
          <p className={styles.link}>Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text="dashboard" />
        </a>
       
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
