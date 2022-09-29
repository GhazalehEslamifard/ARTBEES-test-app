import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { Layout } from "antd";

export const globalStyles = css`
  #root {
    height: 100%;
  }
`;

export const StyledLayout = styled(Layout)`
  height: 100%;
  overflow: auto;

  & > .ant-layout-header {
    height: unset;
    padding: unset;
  }
`;

export const StyledContent = styled(Layout.Content)`
  padding: 32px;
`;
