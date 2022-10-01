import React from "react";

import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/reducer";

import DarkTheme from "./dark-theme";
import LightTheme from "./light-theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <>
      {theme.isInDarkMode ? <DarkTheme /> : <LightTheme />}
      {children}
    </>
  );
};
