import { createContext, useContext, useState } from "react";
import "../app/globals.css";
import Header from "../app/Components/Header/header";
// import ScrollTop from "../app/Components/scrolltop/scrolltop";
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
