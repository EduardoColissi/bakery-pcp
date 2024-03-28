import { HeartFilled } from "@ant-design/icons";
import { Layout } from "antd";

const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer
      style={{
        alignSelf: "center",
        justifySelf: "center",
        maxHeight: 30,
        marginTop: 10,
        padding: 5,
        textAlign: "center",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      Made with <HeartFilled /> by Eduardo Colissi
    </Footer>
  );
};

export default Footer;
