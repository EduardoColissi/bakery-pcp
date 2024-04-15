import { Layout } from "antd";
import { Props } from "./types";

const { Content } = Layout;

const TemplateContent = ({ children }: Props) => {
  return (
    <Content
      style={{
        margin: 10,
        padding: 15,
        minHeight: 650,
        marginBottom: 0,
        overflowY: "auto",
        position: "relative",
      }}
    >
      {children}
    </Content>
  );
};

export default TemplateContent;
