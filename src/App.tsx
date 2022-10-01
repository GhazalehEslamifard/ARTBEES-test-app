import { Switch, Layout, Menu, PageHeader } from "antd";
import { useCallback, memo } from "react";
import { Link } from "react-router-dom";

import ApplicationRoutes from "./routes";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { changeTheme, selectTheme } from "./store/theme-reducer";
import { StyledContent, StyledLayout } from "./styles";

const navItem: { title: string; id: number; path: string }[] = [
  { title: "Builder", id: 1, path: "/" },
  { title: "Content", id: 2, path: "/content" },
  { title: "Biography", id: 3, path: "/biography" },
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
          items={navItem.map((item) => ({
            label: <Link to={item.path}>{item.title}</Link>,
            key: item.id,
          }))}
        />
      </Header>
      <StyledContent>
        <ApplicationRoutes />
      </StyledContent>
    </StyledLayout>
  );
}

export default memo(App);
