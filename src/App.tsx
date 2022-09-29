import { Switch, Layout, Menu, PageHeader } from "antd";
import React, { useCallback } from "react";

import BuilderPage from "./pages/builder";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { changeTheme, selectTheme } from "./store/reducer";
import { StyledContent, StyledLayout } from "./styles";

const navItem: { title: string; id: number }[] = [
  { title: "Builder", id: 1 },
  { title: "Content", id: 2 },
  { title: "Biography", id: 3 },
];

function App(): React.ReactElement {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { Header } = Layout;

  const handleThemeChange = useCallback(() => {
    dispatch(changeTheme(!theme.isInDarkMode));
  }, [theme.isInDarkMode]);

  return (
    <StyledLayout>
      <Header>
        <PageHeader
          ghost={false}
          extra={[
            <Switch
              title="Switch theme"
              checkedChildren="Light"
              unCheckedChildren="Dark"
              key="theme"
              checked={!theme.isInDarkMode}
              onChange={handleThemeChange}
            />,
          ]}
        />
        <Menu
          mode="horizontal"
          items={navItem.map((item) => ({ label: item.title, key: item.id }))}
        />
      </Header>
      <StyledContent>
        <BuilderPage />
      </StyledContent>
    </StyledLayout>
  );
}

export default App;
