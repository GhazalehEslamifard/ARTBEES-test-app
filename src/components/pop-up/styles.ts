import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isInDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  box-shadow: 0 0 6px 2px
    ${({ isInDarkMode }) => (isInDarkMode ? "#575757" : "#b8b8b8")};
  background: ${({ isInDarkMode }) => (isInDarkMode ? "#2e2e2e" : "#ffffff")};
`;

export const StyledButton = styled.button`
  all: unset;
  background: dodgerblue;
  color: #ffffff;
  padding: 4px 6px;
  margin-left: auto !important;
`;
