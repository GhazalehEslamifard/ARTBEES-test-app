import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme-reducer";

import DarkTheme from "./dark-theme";
import LightTheme from "./light-theme";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const theme = useAppSelector(selectTheme);

  return (
    <>
      {theme.isInDarkMode ? <DarkTheme /> : <LightTheme />}
      {children}
    </>
  );
}
