import React from "react";

import { ThemeContext } from "./ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <>
      <button
        className="themeToggler"
        style={{ height: "40px", width: "130px", fontSize: "18px" }}
        onClick={toggleTheme}
      >
        Switch to {theme == "light" ? "Dark" : "Light"}
      </button>
    </>
  );
}

export default ThemeToggler;
