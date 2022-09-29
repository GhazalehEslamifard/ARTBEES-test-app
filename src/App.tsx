import { Switch, Layout, Menu, PageHeader, Row, Col } from "antd";
import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { changeTheme, selectTheme } from "./store/reducer";
import { StyledLayout } from "./styles";

const navItem: { title: string; id: number }[] = [
  { title: "Builder", id: 1 },
  { title: "Content", id: 2 },
  { title: "Biography", id: 3 },
];

function App(): React.ReactElement {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { Header, Content } = Layout;

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
        <Menu mode="horizontal">
          {navItem.map((item) => (
            <Menu.Item key={item.id}>{item.title}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <Row>
          <Col>Content</Col>
        </Row>
      </Content>
    </StyledLayout>
  );
}

export default App;
