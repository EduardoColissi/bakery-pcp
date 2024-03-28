import { Layout } from "antd";
import HeaderBackButton from "../../atoms/HeaderBackButton";
import HeaderDropdown from "../../molecules/HeaderDropdown";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header
      style={{
        padding: 0,
        background: "#4f76be",
      }}
    >
      <HeaderBackButton />
      <HeaderDropdown />
    </Header>
  );
};

export default Header;
