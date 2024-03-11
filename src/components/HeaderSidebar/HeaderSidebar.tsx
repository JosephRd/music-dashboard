import React, { useState } from "react";
import {
  CustomerServiceOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import AppRoutes from "../Routes/index";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./HeaderSidebar.css";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="ant-layout-sider-children">
          <div className="demo-logo-vertical" id="titleDashboard">
            <h2>Music 2023 Dashboard</h2>
          </div>
          <Menu
            style={{ marginTop: "35vh" }}
            theme="dark"
            mode="inline"
            onClick={(item: any) => {
              navigate(item.key);
            }}
            items={[
              {
                key: "/",
                icon: <HomeOutlined />,
                label: "Overview",
              },
              {
                key: "/playlists",
                icon: <CustomerServiceOutlined />,
                label: "My Playlist",
              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRoutes />
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
