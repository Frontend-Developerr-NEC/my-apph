import { createContext, useContext, useState } from "react";
import "../app/globals.css"
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body className={theme}>
        <main className={theme}>{children}</main>
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
