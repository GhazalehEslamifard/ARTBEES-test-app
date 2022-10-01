import { useEffect, useState, memo } from "react";

import { Container } from "./styles";

function ContentPage(): React.ReactElement {
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("styled-text");
    if (storedValue) {
      setValue(storedValue);
    } else {
      setValue("");
    }
  }, []);

  return <Container dangerouslySetInnerHTML={{ __html: value }} />;
}

export default memo(ContentPage);
