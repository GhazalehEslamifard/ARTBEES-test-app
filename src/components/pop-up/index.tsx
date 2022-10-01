import React, { useCallback } from "react";

import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/reducer";

import { Wrapper, StyledButton } from "./styles";

function PopUpComponent({ onClose }: { onClose: () => void }) {
  const theme = useAppSelector(selectTheme);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Wrapper isInDarkMode={theme.isInDarkMode}>
      <a href="tel:+989211649799">09211649799</a>
      <a href="mailto:gh.eslamifard@gmail.com">gh.eslamifard@gmail.com</a>
      <a href="https://www.linkedin.com/in/ghazaleh-eslamifard">
        Linkedin account
      </a>
      <a href="https://github.com/GhazalehEslamifard">Github account</a>
      <a href="https://medium.com/@gh.eslamifard">Medium account</a>
      <StyledButton onClick={close}>Close</StyledButton>
    </Wrapper>
  );
}

export default PopUpComponent;
