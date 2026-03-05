import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {theme === "dark" ? <FiMoon /> : <FiSun />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
