import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  padding: 16px;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  box-shadow: 0 0 6px 2px lightgray;
`;

export const StyledButton = styled.button`
  all: unset;
  background: dodgerblue;
  color: white;
  padding: 4px 6px;
  margin-left: auto;
`;
