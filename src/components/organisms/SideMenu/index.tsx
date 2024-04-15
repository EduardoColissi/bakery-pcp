import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import * as React from "react";
import { PiBuildingsBold } from "react-icons/pi";
import { AiFillDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MenuItem } from "./types";
import "./style.css";

const { Sider } = Layout;

const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const menuItems: MenuItem[] = [
    {
      key: "1",
      icon: <AiFillDashboard />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <PiBuildingsBold />,
      label: "Empresas",
      children: [
        {
          key: "2.1",
          label: <Link to="/companies">Listar</Link>,
          icon: <FaList />,
        },
        {
          key: "2.2",
          label: <Link to="/companies/create">Cadastrar</Link>,
          icon: <FiPlusCircle />,
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
          fontSize: 13,
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
                style={{
                  backgroundColor: "#4168b0",
                }}
              >
                {item.children.map((subItem) => (
                  <Menu.Item
                    key={subItem.key}
                    style={{
                      backgroundColor: "#4168b0" + "CC",
                      width: "100%",
                      border: "none",
                      marginBottom: 0,
                      marginTop: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      borderRadius: 0,
                    }}
                    icon={subItem.icon}
                  >
                    {subItem.label}
                  </Menu.Item>
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
