import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import * as React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";

const { Sider } = Layout;

const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const menuItems = [
    {
      key: "1",
      icon: <AiFillDashboard />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <MdOutgoingMail />,
      label: "Menu w/ submenu",
      children: [
        {
          key: "2-1",
          label: <Link to="/dashboard">Submenu 1</Link>,
        },
        {
          key: "2-2",
          label: <Link to="/dashboard">Submenu 2</Link>,
        },
      ],
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={230}
      style={{
        backgroundColor: "#4168b0",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {collapsed ? (
        <Space className="trigger">
          <MenuUnfoldOutlined
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color: "#fff",
              marginBottom: 0,
              paddingBottom: 0,
              marginLeft: 5,
            }}
          />
        </Space>
      ) : (
        <Space className="trigger">
          <MenuFoldOutlined
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color: "#fff",
              marginBottom: 0,
              paddingBottom: 0,
              marginLeft: 5,
            }}
          />
        </Space>
      )}
      <div className="logo">{collapsed ? null : null}</div>
      <Menu
        theme="dark"
        mode="inline"
        style={{
          backgroundColor: "#4168b0",
          color: "#fff",
        }}
      >
        {menuItems.map((item) => {
          if (item.children) {
            return (
              <SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
                className="custom-submenu"
              >
                {item.children.map((subItem) => (
                  <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              className="custom-submenu"
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
