import { Layout as AntdLayout } from "antd";

import Footer from "../../molecules/Footer";
import Header from "../../organisms/Header";
import SideMenu from "../../organisms/SideMenu";
import TemplateContent from "../../organisms/TemplateContent";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "100vw",
        maxWidth: "100vw",
      }}
    >
      <SideMenu />
      <AntdLayout>
        <Header />
        <TemplateContent>{children}</TemplateContent>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
