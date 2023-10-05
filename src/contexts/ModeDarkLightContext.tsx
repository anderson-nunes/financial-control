import { createContext, useEffect, useState, ReactNode } from 'react';
import { dark, light } from '../styles/themes/default';
import type { ColorTheme } from '../styles/themes/default';
import { ThemeProvider } from 'styled-components';

type ThemeName = 'light' | 'dark';

interface ModeDarkLightData {
  theme: ColorTheme;
  themeName: ThemeName;
  handleTheme: (theme: ThemeName) => void;
}

export const ModeDarkLightContext = createContext<ModeDarkLightData>({
  theme: dark,
  themeName: 'dark',
  handleTheme: (_theme: ThemeName) => { }
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function useThemeDarkLightProvider() {
  const storedThemeName = localStorage.getItem('themeName');
  const initialThemeName: ThemeName = storedThemeName ? (storedThemeName as ThemeName) : 'light';

  const [theme, setTheme] = useState<typeof light | typeof dark>(initialThemeName === 'light' ? light : dark);

  const [themeName, setThemeName] = useState<ThemeName>(initialThemeName);

  function handleTheme(newTheme: ThemeName) {
    setThemeName(newTheme);
    localStorage.setItem('themeName', newTheme);
  }

  useEffect(() => {
    setTheme(themeName === 'light' ? light : dark);
  }, [themeName]);

  return { theme, themeName, handleTheme };
}

export function ThemeDarkLightProvider({ children }: ThemeProviderProps) {
  const { theme, themeName, handleTheme } = useThemeDarkLightProvider();

  return (
    <ModeDarkLightContext.Provider
      value={{
        theme,
        themeName,
        handleTheme
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeDarkLightContext.Provider>
  );
}
