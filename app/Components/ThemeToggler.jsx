
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="themeToggler"
        style={{ height: "40px", width: "130px", fontSize: "18px" }}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Switch to {theme == "light" ? "Dark" : "Light"}
      </button>
    </>
  );
}
