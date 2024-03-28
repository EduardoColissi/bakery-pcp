import { ArrowLeftOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";

const HeaderBackButton = () => {
  const backToLastPage = useNavigate();

  return (
    <Space className="trigger">
      <ArrowLeftOutlined
        className="trigger"
        style={{ color: "#fff", float: "left" }}
        onClick={() => backToLastPage(-1)}
      />
    </Space>
  );
};

export default HeaderBackButton;
