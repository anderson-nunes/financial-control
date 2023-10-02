import { createContext, useEffect, useState, ReactNode } from "react";
import { dark, light } from "../styles/themes/default";
import { ThemeProvider } from "styled-components";

interface ModeDarkLightData {
  theme: typeof light | typeof dark;
  themeName: "light" | "dark";
  handleTheme: (newTheme: "light" | "dark") => void;
}

export const ModeDarkLightContext = createContext<ModeDarkLightData | undefined>(
  undefined
);

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
}

export function useThemeDarkLightProvider() {
  const [theme, setTheme] = useState<typeof light | typeof dark>(light);
  const [themeName, setThemeName] = useState<Theme>("dark");

  function handleTheme(newTheme: Theme) {
    setThemeName(newTheme);
  }

  useEffect(() => {
    setTheme(themeName === "light" ? light : dark);
  }, [themeName]);

  return { theme, themeName, handleTheme };
}

export function ThemeDarkLightProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeDarkLightProvider();

  return (
    <ModeDarkLightContext.Provider value={useThemeDarkLightProvider()}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeDarkLightContext.Provider>
  );
}

