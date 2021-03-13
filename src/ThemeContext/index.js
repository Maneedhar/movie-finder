import React, { createContext } from "react";
import useToggleState from "./useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, toggleTheme] = useToggleState(false);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
