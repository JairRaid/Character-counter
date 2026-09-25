import { createContext, useState, type ReactNode } from "react";

export type ThemeContextValue = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    const themeExist = localStorage.getItem("theme");

    if (themeExist) return themeExist;

    const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return preferedTheme;
  });

  const value = { theme, setTheme };

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
