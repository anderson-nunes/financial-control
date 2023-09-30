import { useState, useEffect } from "react";
import { dark, light } from "../styles/themes/default";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<any>(light);
  const [themeName, setThemeName] = useState("light");

  function handleTheme(newTheme: Theme) {
    setThemeName(newTheme);
  }

  useEffect(() => {
    setTheme(themeName === "light" ? light : dark);
  }, [themeName]);

  return { theme, themeName, handleTheme };
}
