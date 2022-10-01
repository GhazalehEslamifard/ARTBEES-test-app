import "./light-theme.css";
import { useEffect } from "react";

function LightTheme() {
  useEffect(() => {
    document.body.classList.remove("dark-theme");
  }, []);

  return <></>;
}

export default LightTheme;
