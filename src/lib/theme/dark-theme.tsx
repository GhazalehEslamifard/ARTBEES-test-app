import "./dark-theme.css";
import { useEffect } from "react";

function DarkTheme() {
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  return <></>;
}

export default DarkTheme;
